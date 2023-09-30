const exp = require("constants");
const express = require("express");
// const authController = require("../../controller");
const authRouter = express.Router();
const User = require("../../model/user.model");
const bcrypt = require("bcrypt");
authRouter.post("/signup",async (req,res)=>{
    // try{
        const {first_name,last_name,email,password} = req.body;
        // let encryptedPass = await bcrypt.hash(10,password);
        const dataRes = await User.create({
            first_name,
            last_name,
            email,
            password 
        });
        return res.status(200).json({
            message:"User register successfully!"
        });
    // }catch(error){
    //     return res.status(501).json({
    //         error : error
    //     });
    // }
});

authRouter.post("/login",async (req,res)=>{
    try{
        const {password,email} = req.body;
        const findUser = await User.findOne({email:email});
        if(findUser){
            const verifyPassword = await bcrypt.compare(User.findUser.password,password);
            if(verifyPassword){
                delete findUser.password;
                return res.status(200).json({
                    message : "login successfully!",
                    data : findUser
                });
            }else{
                return res.status(401).json({
                    message:"Incorrect password!"
                });
            }
        }else{
            return res.status(404).json({
                message:"User not exist!"
            });
        }
    }catch(error){
        return res.status(501).json({
            error:error
        });
    }
});

module.exports = authRouter;