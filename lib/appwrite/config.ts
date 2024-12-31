export const appwriteConfig = {
    endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
    projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT!,
    usersCollectionId: process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION!,
    filesCollectionId: process.env.NEXT_PUBLIC_APPWRITE_FILES_COLLECTION!,
    storageBucketId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET!,
    databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
    secretKey: process.env.NEXT_APPWRITE_SECRET!
}
