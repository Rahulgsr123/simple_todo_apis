const mongoose = require("mongoose");


const url="mongodb+srv://rahulgsr59:UPHY7bgFPytpIKGp@cluster0.55oetam.mongodb.net/"
async function connectDb() {
  try {
    await await mongoose.connect(url, {
      dbName: "simple_todo_db",
    });
    console.log("database connected");
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = { connectDb };
