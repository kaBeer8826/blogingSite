import { retry } from "@reduxjs/toolkit/query";
import conf from "../conf/conf";
import { Client,Databases,ID,Query,Storage } from "appwrite";

export class Services{
        client = new Client();
        database;
        bucket;
        
        constructor(){
            this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProductId)
            this.database = new Databases(this.client)
            this.bucket = new Storage(this.client)

            async createPost({title,slug,content,featuredImage,status,userId}){
                try {
                    return await this.database.createDocument(
                        conf.appwriteDatabaseId,
                        conf.databaseCollectionId,
                        slug,
                        {
                            title,
                            content,
                            featuredImage,
                            status,
                            userId

                    }  
                    )
                } catch (error) {
                    
                }
            }
            

            async updatePost(slug,{title,content,featuredImage,status,userId}){
                try {
                    return await this.database.updateDocument(
                        conf.appwriteDatabaseId,
                        conf.databaseCollectionId,
                        slug,
                        {
                            title,
                            content,
                            featuredImage,
                            status
                        }
                    )
                } catch (error) {
                    throw error
                }
            }
            
            async deletePost(slug){
                try {
                    await this.database.deleteDocument(
                        conf.appwriteDatabaseId,
                        conf.databaseCollectionId,
                        slug
                    )
                    return true
                } catch (error) {
                    throw error
                    return false
                }
            }

            async getPost(slug){
                try {
                    return await this.database.getDocument(
                        conf.appwriteDatabaseId,
                        conf.databaseCollectionId,
                        slug
                    )
                } catch (error) {
                    console.log(error)
                }
            }

            async getPosts(quaries = [Query.equal("status","active")]){
                try {
                    return await this.database.listDocuments(
                        conf.appwriteDatabaseId,
                        conf.databaseCollectionId,
                        quaries,
                        100,
                        1
                    )
                } catch (error) {
                    throw error
                }
            }
        }
};

const serives= new Services;
export default serives;