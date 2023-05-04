import mongoose from "mongoose";
require("dotenv").config();

mongoose.set("strictQuery", true);



async function dbConnect() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    
    console.log("Database connection successful !");
  } catch (err) {
    console.log("Couldn't connect to db, Error : ", err);
  }
}


dbConnect()
