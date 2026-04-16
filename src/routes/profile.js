const express= require("express");
const {userAuth}=require("../middlewares/auth");
const {validateEditProfileData}=require("../utils/validation")

const profileRouter=express.Router();


profileRouter.get("/profile/view",userAuth,async (req,res)=>{
      try{
         const user=req.user;

      if(!user){
         throw new Error("user not found...");
      }

      res.send(user);
   }catch{
         res.status(400).send("something went wrong!");

   }
});

profileRouter.patch("/profile/edit", userAuth,async (req,res)=>{
   try{
      if(!validateEditProfileData(req)){
         throw new Error("invalid Edit Request....");
      }

      const loggedInUser= req.user;
      

      Object.keys(req.body).forEach((key)=>(loggedInUser[key]= req.body[key]))
      
      await loggedInUser.save();
      res.json({message: `${loggedInUser.firstName}, your profile is updated successfully...`});



   }catch(err){
      res.status(400).send("Error : "+ err.message);
   }
})




module.exports= profileRouter;