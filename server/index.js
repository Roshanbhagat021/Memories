import express from "express"
import cors from "cors"
import connection from "./config/db.js"

const port = process.env.PORT || 8080

import PostRoute from "./Routes/Post.route.js"
import UplaodRoute from "./Routes/Upload.route.js"

const app = express()


app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.send("Hello my name is khan!")
})

app.use("/posts",PostRoute )
app.use("/upload",UplaodRoute)


app.listen(port,async()=>{
    await connection()
    console.log(`Server is running on port ${port}`)
})

