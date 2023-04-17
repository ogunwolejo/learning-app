import {Schema, model} from "mongoose";

const IUser:Schema = new Schema({
    fullName:{
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
}, {timestamps:true})

export default model('User', IUser);