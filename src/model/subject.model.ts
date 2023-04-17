import {Schema, model} from "mongoose";

const ISubject:Schema = new Schema({
    category: {
        type:String,
        required:true,
        unique:true
    }
}, {timestamps:true})

export default model('Subject', ISubject);