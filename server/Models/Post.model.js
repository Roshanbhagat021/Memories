import mongoose  from "mongoose";


const postSchema =  new mongoose.Schema({
    title:String, 
    message: String,
    creator: String,
    tags:[String],
    image:String, 
    likeCount:{
        type:Number,
        default:0
    }, 
    createdAt:{
        type:Date,
        default: Date.now
    },
},{
    versionKey:false
})

 const PostMessage = new mongoose.model("post",postSchema)


 export  default PostMessage