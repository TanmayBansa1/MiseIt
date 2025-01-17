'use server'

import { ID, Models, Query } from "node-appwrite"
import { createAdminClient, createSessionClient } from "../appwrite"
import { appwriteConfig } from "../appwrite/config"
import { parseStringify } from "../utils"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function getuserByEmail(email: string) {
       const {database} = await createAdminClient()

       const result = await database.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.usersCollectionId,
        [Query.equal('email',[email])]
       )

       return result.total > 0 ? result.documents[0] : null
}
export async function sendEmailOTP(email: string) {
    const {account} = await createAdminClient()

    try{
        const session = await account.createEmailToken(ID.unique(), email)
        return session.userId
    }catch(err){
        console.log(err, "Failed to send email OTP");
        throw err;
        
    }
}

export const createAccount = async ({fullname, email}:{fullname: string, email: string})=>{

    const existingUser = await getuserByEmail(email)

    const accountId = await sendEmailOTP(email)
    if(!accountId){
        throw new Error("Failed to send email OTP")
    }

    if(!existingUser){
        const {database} = await createAdminClient()

        const result = await database.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.usersCollectionId,
            ID.unique(),
            {
                fullname,
                email,
                accountId,
                avatar:
                     "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                
            }
        )
    
        
    }
    return parseStringify({accountId:accountId})


}


export const verifyOTP = async ({accountId,otp}:{accountId: string,otp: string})=>{

    
    try{
        const {account} = await createAdminClient()

        const session:Models.Session = await account.createSession(accountId, otp);
        
        (await cookies()).set("appwrite-session", session.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true,
      });
      
      return parseStringify({sessionId: session.$id})
    }catch(err){
        console.log(err, "Failed to verify OTP");
        throw err;
        
    }
}

export const signInUser = async ({email}:{email: string}) => {
    try {
        const existingUser = await getuserByEmail(email);
        if (!existingUser) {
            throw new Error("User not found");
        }

        const accountId = await sendEmailOTP(email);
        if (!accountId) {
            throw new Error("Failed to send email OTP");
        }

        return parseStringify({ accountId: accountId });
    } catch (error) {
        console.error("Error in signInUser:", error);
        throw error;
    }
}

export const getCurrentUser = async()=>{

    try{

        const {account, database} = await createSessionClient();
    
        const result = await account.get();
    
        const user = await database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.usersCollectionId,
            [Query.equal("accountId", [result.$id])]
        )
    
        if(user.total <= 0){return null}
        return parseStringify(user.documents[0])
    }catch(err){
        console.log(err, "Failed to get current user");
        // throw new Error("Failed to get current user");
    }

}

export const signOutUser = async () => {

    const { account } = await createSessionClient()
    try{

        await account.deleteSession('current');
        (await cookies()).delete('appwrite-session')
        redirect('/sign-in')

    }catch(err){
        console.log(err, "Failed to sign out user");
        throw new Error("Failed to sign out user");
    }finally{
        redirect('/sign-in')
    }


}