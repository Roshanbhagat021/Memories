import express from "express"
import { getPosts , createPost, deletePost, updatePost} from "../controllers/post.js";

const Router = express.Router()

Router.get("/",getPosts)
Router.post("/",createPost)
Router.delete("/delete/:id",deletePost)
Router.patch("/update/:id",updatePost)


export default Router;