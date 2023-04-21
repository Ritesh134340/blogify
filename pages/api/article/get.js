import "../../../utils/config/db";
require("dotenv").config();
import Article from "../../../utils/models/article.model";
import Public from "../../../utils/models/public.model"


export default async function handler(req, res) {
  try {
      
      const document=await Article.find({});
      const heroData=await Public.find({})
      res.status(200).json({ mesg: "Ok",articles:document,heroData:heroData});
      
    }
   catch (err) {
    console.error("Error from get article route", err);
    res.status(500).json({ mesg: "Internal server error !" });
  }
}
