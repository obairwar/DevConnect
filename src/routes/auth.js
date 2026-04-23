const express= require("express");
const authRouter= express.Router();
const User=require("../models/user");
const {validateSignUpData}=require("../utils/validation")
const bcrypt=require("bcrypt");


// app.use is exactly sam as authRouter.use

authRouter.post("/signup",async (req,res)=>{ 
   //validation of data
   try{
      validateSignUpData(req);

   // Encrypt the password 
      const {firstName,lastName,emailId,password}=req.body;
      const passwordHash=await bcrypt.hash(password,10);
      



   // creating a new instance of the User model
   const user= new User({
      firstName,
      lastName,
      emailId,
      password:passwordHash,

   });

   
      await user.save();   //saving the user in the database => the function returns a promise=> so using async and await
      res.send("user added successfully !!");
   }catch(err){
      res.status(400).send("Error : "+ err.message);

   }
 });

authRouter.post("/login",async(req,res)=>{
      try{
      const {emailId,password}= req.body;

      const user= await User.findOne({emailId:emailId});
      
      if(!user){
         throw new Error ("invalid credientials...");
      }
      const isPasswordValid=await user.validatePassword(password);

      if(isPasswordValid){
         //create a JWt token
         const token= await user.getJWT();

         //add the token to cookie and send the response back to the user
         res.cookie("token",token,{expires:new Date(Date.now()+7*360000)});
      
         res.send("login succussfully ..");
         }else{
            throw new Error("Invalid credientials...");
         }
      }catch(err){
         res.status(400).send("ERROR: "+ err.message);
      }
   }
)

authRouter.post("/logout",async(req,res)=>{
   
   res.cookie("token",null,{
      expires:new Date(Date.now()),
   })
   res.send("logout successfully...")

})

module.exports= authRouter;