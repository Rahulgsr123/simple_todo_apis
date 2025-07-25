const mongoose = require("mongoose");
const { connectDb } = require("../config/db");

const todosSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      uppercase: true,
      minLength: 3,
    },
    body: { type: String, required: true, trim: true, minLength: 2 }
  },
  { timestamps: true }
);

const TodoModel= new mongoose.model("todos", todosSchema)

module.exports={TodoModel}