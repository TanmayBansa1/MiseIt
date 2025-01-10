'use server'
import { RenameFileProps, UpdateFileUsersProps, UploadFileProps } from "@/types";
import { createAdminClient } from "../appwrite";
import { InputFile } from "node-appwrite/file";
import { appwriteConfig } from "../appwrite/config";
import { ID, Models, Query } from "node-appwrite";
import { constructFileUrl, getFileType, parseStringify } from "../utils";
import { revalidatePath } from "next/cache";
import { getCurrentUser } from "./user.actions";

export async function uploadFile({file, ownerId, accountId, path}: UploadFileProps) {

    const {storage, database} = await createAdminClient();
    // console.log(accountId, ownerId);
    try{
        const inputFile = InputFile.fromBuffer(file, file.name);

        const bucketFile = await storage.createFile(
            appwriteConfig.storageBucketId,
            ID.unique(),
            inputFile
        );

        const fileData = await database.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.filesCollectionId,
            ID.unique(),
            {
                type: getFileType(file.name).type,
                extension: getFileType(file.name).extension,
                name: bucketFile.name,
                url: constructFileUrl(bucketFile.$id),
                owner: ownerId,
                accountId,
                size: bucketFile.sizeOriginal,
                bucketFileId: bucketFile.$id,
                users: []
            }

        ).catch(async (err) => {
            await storage.deleteFile(appwriteConfig.storageBucketId, bucketFile.$id);
            console.log(err, "Failed to create document");
            throw err;
        })

        revalidatePath(path)
        return parseStringify(fileData)
    }catch(err){
        console.log(err, "Failed to upload file");
        throw err;
    }
}

const createQueries = (user: Models.Document) => {
   const queries = [
    Query.or([
        Query.equal('owner', [user.$id]),
        Query.contains('users', [user.email]),
    ])
   ] 

   return queries;
}

export async function getFiles(){

    const {database} = await createAdminClient();

    try{
        const currUser = await getCurrentUser();
        if(!currUser) return new Error("User not found");

        const queries = createQueries(currUser);
        const files = await database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.filesCollectionId,
            queries
        ).catch((err) => {
            console.log(err, "Failed to get files");
            throw err;
        });

        return parseStringify(files.documents)

    }catch(err){

        console.log(err, "Failed to get files");
        throw err;
    }
}

export async function renameFile( {fileId, name, extension, path}: RenameFileProps){

    const {database} = await createAdminClient();
    try{
        const updatedFile = await database.updateDocument(
            appwriteConfig.databaseId,
            appwriteConfig.filesCollectionId,
            fileId,
            {
                name,
                extension
            }
        )
        revalidatePath(path)
        return parseStringify(updatedFile)
    } catch(err){
        console.log(err, "Failed to rename file");
        throw err;
    }
}

export async function shareFile( {fileId, path, emails}: UpdateFileUsersProps){

    const {database} = await createAdminClient();
    try{
        const updatedFile = await database.updateDocument(
            appwriteConfig.databaseId,
            appwriteConfig.filesCollectionId,
            fileId,
            {
                users: emails
            }
        )
        revalidatePath(path)
        return parseStringify(updatedFile)
    } catch(err){
        console.log(err, "Failed to share file");
        throw err;
    }
}