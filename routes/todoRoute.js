const express=require("express")
const { model } = require("mongoose")
const {getAllTodo,addTodo,getTodo,deleteTodo,updateTodo}=require("../controllers/todoController")
const router=express.Router()

router.get("/getAllTodos",getAllTodo)
router.post("/addTodo", addTodo)
router.put("/updateTodo/:id", updateTodo)
router.get("/getTodo/:id",getTodo)
router.delete("/deleteTodo/:id",deleteTodo)

module.exports = router