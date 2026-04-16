const express= require("express");
const userRouter= express.Router();
const {userAuth}= require("../middlewares/auth")
const ConnectionRequest= require("../models/connectionRequest");

//get all the pending connection request for the logged in user
userRouter.get("/user/requests/recieved", userAuth, async (req,res)=>{
    try{
         const loggedInUser= req.user;

         const connectionRequest= await ConnectionRequest.find({
            toUserId:loggedInUser._id,
            status:"interested"
         })
         
         res.json({
            message:"Data fetched Successfully ...",
            data:connectionRequest,
         })








    }catch(err){
        res.status(400).send("ERROR " + err.message);
    }
})


module.exports= userRouter;