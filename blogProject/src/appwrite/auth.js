import { appendErrors } from "react-hook-form";
import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthServices{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProductId);     
        this.account = new Account(this.client);
    }
    async createAccount({email,password,name}){
        try{
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if (userAccount) {
                return this.logIn({email,password})
            } else {   
                return userAccount
            }
        }catch{
            console.error("Error creating account:", error); 
            const errorMessage = error.message || "An error occurred while creating your account.";
            throw new Error(errorMessage);
        }
    }

    async logIn({email,password}){
        try {
            return await this.account.createEmailSession(email,password)
        } catch (error) {
            throw error
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error
        }
        return null
    }
    async logOut(){
        try {
            return this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    }
    

};
const authServices = new AuthServices();



export default authServices;