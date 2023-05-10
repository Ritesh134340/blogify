require("../../../utils/config/db")
import User from "../../../utils/models/user.model";
const bcrypt = require("bcrypt");
require("dotenv").config();



export default async function handler(req, res) {
  try {
     const {name,email,password}=req.body;

     const check=await User.findOne({email:email})

     if(check){
        res.status(409).json({mesg:"User already exists !"})
     }
     else{
       
        bcrypt.hash(password, 5, async function(err, hash) {
            if(err){
                res.status(500).json({mesg:"Internal server error!"})
            }
            if(hash){
                const newUser=new User({
                    name:name,
                    email:email,
                    password:hash
                })

                await newUser.save();
                res.status(201).json({mesg:"User created successfully!"});
            }
        });
       
     } 
    }
   catch (err) {
    console.error("Error from create user route", err);
    res.status(500).json({ mesg: "Internal server error !" });
  }
}
