import "../../../utils/config/db";
require("dotenv").config();
import Article from "../../../utils/models/article.model";


export default async function handler(req, res) {
  try {
      const {slug}=(req.query)
      const document=await Article.findOne({slug:slug});
      res.status(200).json({ mesg: "Ok",document:document});
    }
   catch (err) {
    console.error("Error from get article route", err);
    res.status(500).json({ mesg: "Internal server error !" });
  }
}
