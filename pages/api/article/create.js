import "../../../utils/config/db";
const slugify = require("slugify");
require("dotenv").config();
const jwt = require("jsonwebtoken");
import cookie from "cookie";
import Article from "../../../utils/models/article.model";
import User from "../../../utils/models/user.model";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handler(req, res) {
  
  const session = await getServerSession(req, res, authOptions);

  try {
    const { image, title, shortDes, longDes, category } = req.body;

    const slug = slugify(title);

  

    if (session) {
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
