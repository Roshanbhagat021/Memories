import PostMessage from "../Models/Post.model.js"

export const getPosts = async (req, res) => {
  try {
    const allPosts = await PostMessage.find();
    console.log('Fetched Posts:', allPosts.length);
    res.status(200).json(allPosts);
  } catch (error) {
    console.error('Error while fetching posts:', error);
    res.status(500).json({ msg: error.message });
  }
};



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

export const deletePost = async (req,res)=>{
    const id=  req.params.id
    try {
        const post = await PostMessage.findByIdAndDelete(id)
        if(!post){
            return res.status(500).send("Post not Found!")
        }else{
            res.status(204).send("Post deleted successfully")
        }
        
    } catch (error) {
        res.status(409).send({msg:error.message})
        console.log("Error while deleting a new post!")
    }
}

export const updatePost = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedPost = await PostMessage.findByIdAndUpdate(
      id,
      { $inc: { likeCount: 1 } }, 
      { new: true } 
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(409).json({ msg: error.message });
    console.log("Error while updating the post!");
  }
};
