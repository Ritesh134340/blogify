import User from "@/utils/models/user.model";
import "../../../utils/config/db";
const bcrypt = require("bcrypt");
require("dotenv").config()
const jwt = require("jsonwebtoken");
import cookie from "cookie"

export default async function handler(req, res) {
  try {
    const { email, password } = req.body;
    const check = await User.findOne({ email: email });
    if (check) {
      const result = await bcrypt.compare(password, check.password);

      if (result) {
       const  token = jwt.sign({email:email,id:check._id }, process.env.SECRET_KEY);
       const myCookieValue = token;
       res.setHeader('Set-Cookie', cookie.serialize('token',myCookieValue, {
        httpOnly: true,
        sameSite:true,
        secure:'strict',
        path:'/',
        maxAge: 60 * 60 * 24 * 7 
      }));

       res.status(200).json({ mesg: "Login successful !" });
      } else {
       res.status(400).json({ mesg: "Invalid credential !" });
      }
    } else {
     res.status(404).json({ mesg: "User not found !" });
    }
  } catch (err) {
    console.log("Error from user login route", err);
    res.status(500).json({ mesg: "Internal server error !" });
  }
}
