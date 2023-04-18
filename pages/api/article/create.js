import "../../../utils/config/db";
const slugify = require("slugify");
require("dotenv").config();
const jwt = require("jsonwebtoken");
import cookie from "cookie";
import Article from "../../../utils/models/article.model";
import User from "../../../utils/models/user.model";

export default async function handler(req, res) {
  try {
    const { image, title, shortDes, longDes, category } = req.body;
    const slug = slugify(title);

    const cookies = cookie.parse(req.headers.cookie || "");
    const token = cookies?.token || "";
   
    let check=null;

    if(token){
     var decoded = jwt.verify(token, process.env.SECRET_KEY);
     check=await User.findOne({ _id: decoded.id });
    }
    
   

    if (check) {
      const payload = {
        image: image,
        title: title,
        shortDes: shortDes,
        longDes: longDes,
        category: category,
        slug: slug,
      };

      const newArticle = new Article(payload);

      await newArticle.save();
      res.status(200).json({ mesg: "Article created successfully !" });
    } else {
      res.status(401).json({ mesg: "Unauthorized !" });
    }
  } catch (err) {
    console.error("Error from create article route", err);
    res.status(500).json({ mesg: "Internal server error !" });
  }
}
