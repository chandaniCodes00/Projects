const mongoose=require("mongoose");
async function connectDB()
{
try{
    await mongoose.connect("mongodb://localhost:27017/");
    console.log("database connected successfully");
}catch(err)
{
    console.log("connection failed",err.message);
}
}

module.exports=connectDB;