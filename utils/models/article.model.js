import mongoose from "mongoose";


const articleSchema=new mongoose.Schema({
   image:{type:String},
   title:{type:String,required:true},
   shortDes:{type:String,required:true},
   longDes:{type:String,required:true},
   category:{type:String,required:true},
   slug:{type:String,required:true,unique:true}
},{timestamps:true})


const Article=mongoose.model("article",articleSchema)
mongoose.model={}

export default Article