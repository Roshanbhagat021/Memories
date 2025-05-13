import mongoose  from "mongoose";


const postSchema =  new mongoose.Schema({
    title:String, 
    message: String,
    Creator: String,
    tags:[String],
    selectedFile:String, 
    likeCount:{
        type:Number,
        default:0
    }, 
    createdAt:{
        type:Date,
        default: new Date()
    },
},{
    versionKey:false
})

 const PostMessage = new mongoose.model("post",postSchema)


 export  default PostMessage