import "../../../utils/config/db";
require("dotenv").config();
import Article from "../../../utils/models/article.model";



export default async function handler(req, res) {
  try {
     
      const searchRegex = new RegExp(req.query.q, "i");
      const document=await Article.find({title:searchRegex});
    
      res.status(200).json({ mesg: "Ok",articles:document});
      
    }
   catch (err) {
    console.error("Error from get article by search route", err);
    res.status(500).json({ mesg: "Internal server error !" });
  }
}
