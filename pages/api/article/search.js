import "../../../utils/config/db";
require("dotenv").config();
import Article from "../../../utils/models/article.model";
import Public from "../../../utils/models/public.model";

export default async function handler(req, res) {
  try {
    await Public.updateOne({
      $push: { searchKeyword: { keyword: req.query.q } },
    });
    const searchRegex = new RegExp(req.query.q, "i");

    console.log(searchRegex);
    const document = await Article.find({ title: { $regex: searchRegex } });
    res.status(200).json({ mesg: "Ok", articles: document });
  } catch (err) {
    console.error("Error from get article by search route", err);
    res.status(500).json({ mesg: "Internal server error !" });
  }
}
