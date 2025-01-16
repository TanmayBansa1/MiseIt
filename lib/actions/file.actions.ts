'use server'
import { DeleteFileProps, GetFilesProps, RenameFileProps, UpdateFileUsersProps, UploadFileProps } from "@/types";
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

const createQueries = (user: Models.Document, types: string[], searchText: string, sort: string, limit?: number) => {
   const queries = [
    Query.or([
        Query.equal('owner', [user.$id]),
        Query.contains('users', [user.email]),
    ])
   ] 
   if(types.length > 0){
    queries.push(Query.equal('type', types))
   }
   if(searchText){
    queries.push(Query.contains('name', searchText))
   }
   if(limit){
    queries.push(Query.limit(limit))
   }
   if(sort){
    const [sortBy, orderBy] = sort.split('-');
    orderBy === 'asc' ? queries.push(Query.orderAsc(sortBy)) : queries.push(Query.orderDesc(sortBy))
   }

   return queries;
}

export async function getFiles({types = [], searchText = "", sort = "$createdAt-desc", limit}: GetFilesProps){

    const {database} = await createAdminClient();

    try{
        const currUser = await getCurrentUser();
        if(!currUser) return new Error("User not found");

        const queries = createQueries(currUser, types, searchText, sort, limit);
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
export async function deleteFile( {fileId, bucketFileId, path}: DeleteFileProps){

    const {storage, database} = await createAdminClient();
    
    try{
        const deletedFile = await database.deleteDocument(
            appwriteConfig.databaseId,
            appwriteConfig.filesCollectionId,
            fileId
        )
        if (deletedFile){

            await storage.deleteFile(
                appwriteConfig.storageBucketId,
                bucketFileId
            )
        }
        revalidatePath(path)
        return parseStringify({status: "successfully deleted file"})
    } catch(err){
        console.log(err, "Failed to delete file");
        throw err;
    }

}