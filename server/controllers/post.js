import PostMessage from "../Models/Post.model.js"

export const getPosts  = async (req,res)=>{
    try {
        const allPosts = await PostMessage.find()
        console.log('allPosts: ', allPosts);
        res.status(200).json(allPosts)
    } catch (error) {
        res.status(404).json({msg:error.message})
        console.log("Error while fetching all the posts")
    }
}


export const createPost = async (req,res)=>{
    const post =  req.body;
    try {
        const newPost = new PostMessage(post)
        await newPost.save()
        res.status(201).send("Post created")
        
    } catch (error) {
        res.status(409).send({msg:error.message})
        console.log("Error while create a new post!")
    }
}