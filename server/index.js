import express from "express"
import cors from "cors"
import connection from "./config/db.js"

import PostRoute from "./Routes/Post.route.js"

const app = express()


app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.send("Hello my name is khan!")
})

app.use("/posts",PostRoute )


app.listen(8080,async()=>{
    await connection()
    console.log("Server is running on port 8080")
})

