import mongoose from "mongoose";
require("dotenv").config()

 async function  connection(){
   
    try{
       
        await mongoose.connect(process.env.DATABASE_URL,{dbName:"Blogify"})
        console.log("Database connection successful !")
    }
    catch(err){
        console.log("Couldn't connect to database !",err)
    }
 
}

connection()

export default mongoose.connection;
