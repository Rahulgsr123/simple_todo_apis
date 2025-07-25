const mongoose=require("mongoose")

async function connectDb(){
try{
    await 
   await mongoose.connect("mongodb://localhost:27017/",{dbName:"simple_todo_db"})
   console.log("database connected");
   
}catch(err){console.log(err.message);
}
}


module.exports = {connectDb}