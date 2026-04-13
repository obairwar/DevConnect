const express= require("express");
const {userAuth}=require("../middlewares/auth");

const profileRouter=express.Router();


profileRouter.get("/profile/view",userAuth,async (req,res)=>{
      try{
         const user=req.user;
         
         res.send(user);

      if(!user){
         throw new Error("user not found...");
      }

      res.send(user);
   }catch{
         res.status(400).send("something went wrong!");

   }
});

 




module.exports= profileRouter;