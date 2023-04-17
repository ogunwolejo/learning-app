import { ObjectId } from "mongoose";

export interface ITopics {
    title:string;
    video:string;
    category:ObjectId
    description?:string;
}