import {Schema, model} from "mongoose";

// title, video, and description.

const ITopic:Schema = new Schema({
    title: {
        type:String,
        required:true,
    },
    video:{
        type:String,
        required:true
    },
    category:{ 
        type: Schema.Types.ObjectId, 
        ref: 'Subject'
    },
    description:{
        type:String
    }

}, {timestamps:true})

export default model('Topic', ITopic);


//563492ad6f917000010000016df22f4994204e9dac66cb50ddd1d2a5