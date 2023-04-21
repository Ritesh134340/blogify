const mongoose=require("mongoose")

const keyWordObj=new mongoose.Schema({
     keyword:String
})

const publicSchema=new mongoose.Schema({
     hero:String,
     searchKeyword:[keyWordObj]
})


mongoose.models={}


export default mongoose.model('public', publicSchema);