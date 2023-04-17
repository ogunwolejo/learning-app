import { ObjectId } from "mongoose";

export interface IToken {
    id: number
}

export interface RequestTokenHandler extends Request {
    id: number
}

export interface IUser {
    email:string;
    password:string;
    fullName:string
}

export interface EUser {
    _id:ObjectId;
    fullName:string;
    email:string;
    password?:string
}