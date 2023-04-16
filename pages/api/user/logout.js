
import "../../../utils/config/db";
require("dotenv").config()
import cookie from "cookie"

export default async function handler(req, res) {
  try {
    
       res.setHeader('Set-Cookie', cookie.serialize('token',"", {
        httpOnly: true,
        sameSite:'strict',
        secure:false,
        path:'/',
        expires:new Date(0)
      }));

       res.status(200).json({ mesg: "Logout successful !" });
    }
     catch (err) {
    console.log("Error from user logout route", err);
    res.status(500).json({ mesg: "Internal server error !" });
  }
}
