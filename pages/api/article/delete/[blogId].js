require("../../../../utils/config/db");
require("dotenv").config();
import Article from "../../../../utils/models/article.model";

export default async function handler(req, res) {
  try {
    const { blogId } = req.query;

     const result=await Article.deleteOne({ _id: blogId });
    if(result.deletedCount>0 ){
      res.status(200).json({ mesg: "Article deleted successfully !" });
    }
    else{
      res.status(500).json({mesg:"Something went wrong !"})
    }
  
  } catch (err) {
    console.error("Error from delete article route", err);
    res.status(500).json({ mesg: "Internal server error !" });
  }
}
