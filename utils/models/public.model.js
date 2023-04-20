const mongoose=require("mongoose")

const publicSchema=new mongoose.Schema({
     hero:String
})


mongoose.models={}


export default mongoose.model('public', publicSchema);