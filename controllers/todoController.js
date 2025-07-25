const {TodoModel}=require("../models/todosSchema")


const getAllTodo= async(req, res)=>{
    try{
        const todosDAta= await TodoModel.find()
        res.status(200).json({message:"Todos", data:todosDAta})
    }catch(err){
        console.log(err.message)
        res.status(400).json({message:"unable to get todos"})
        
    }
}
const addTodo= async (req, res)=>{
    try{
      const {title,body}=req.body
      const newTodo=new TodoModel({title:title, body:body})
      const result= await newTodo.save()
      res.status(200).json({message:"todo added seccessfully", data:result})
    }catch(err){
        console.log(err.message)
        res.status(400).json({message:"failed to add"})
    }
}
const getTodo= async  (req, res)=>{
       try{
        const id= req.params.id;
        const getTodo= await TodoModel.findById(id)
        res.status(200).json({message:"todo ", data:getTodo})
    }catch(err){
        console.log(err.message)
        res.status(400).json({message:"unable to get todos"})
    }
}
const deleteTodo= async(req, res)=>{
    try{
        const id= req.params.id;
        const deleteTodo= await TodoModel.findByIdAndDelete(id)
        res.status(200).json({message:"todo deleted seccessfully", data:deleteTodo})
    }catch(err){
        console.log(err.message)
        res.status(400).json({message:"unable to delete"})
    }
}
const updateTodo= async (req, res)=>{
   try{
        const id= req.params.id;
        const {title,body}=req.body
        const updateTodo= await TodoModel.findByIdAndUpdate(id,{title:title, body:body},{new:true})
        res.status(200).json({message:"todo added seccessfully", data:updateTodo})
    }catch(err){
        console.log(err.message)
        res.status(400).json({message:"unable to get todos"})
    }
}

module.exports={getAllTodo,addTodo,getTodo,deleteTodo,updateTodo}