'use server'
import { UploadFileProps } from "@/types";
import { createAdminClient } from "../appwrite";
import { InputFile } from "node-appwrite/file";
import { appwriteConfig } from "../appwrite/config";
import { ID } from "node-appwrite";
import { constructFileUrl, getFileType, parseStringify } from "../utils";
import { revalidatePath } from "next/cache";

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
                bucketfield: bucketFile.$id,
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