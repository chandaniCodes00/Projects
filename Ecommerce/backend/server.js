const app= require("./app");
const connectDB=require("./config/db");
connectDB();
app.listen(3000, ()=>{
   
    console.log("server running on port 3000");
});