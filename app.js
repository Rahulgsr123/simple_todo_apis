const express=require("express")
const app=express()
const todoRouter= require("./routes/todoRoute")
const {connectDb}=require("./config/db")

connectDb()
//middleware required
app.use(express.json())
app.use(express.urlencoded())

//apis 
app.use("/api/todos/", todoRouter)
app.get("/", (req,res)=>{
    res.status(200).send("hi iam good")
})
app.listen(3000, ()=>{
    console.log("server started on port 3000");
    
})