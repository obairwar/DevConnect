 const express= require("express");
 const connectDB=require("./config/database");
 const app= express();
 const User=require("./models/user");


 app.post("/signup",async (req,res)=>{ 
   //creating a new instance of the User model
   const user=new User({
      firstName:"ubair",
      lastName:"war",
      email:"obair@war.com",
      password:"ubair@123"
   });


   try{
      await user.save();   //saving the user in the database => the function returns a promise=> so using async and await
      res.send("user added successfully !!");
   }catch(err){
      res.status(400).send("Error saving the user: "+ err.message);

   }
 })


 //onces the database is connected successfully then we will start the server

connectDB()
 .then(()=>{
   console.log("Database connection established...");
   app.listen(7777,()=>{
      console.log("server is succussfully listening on port 7777...");
      })
   })
   .catch((err)=>{
      console.log("Database cannot be connected ...");
   })
 ;

 app.listen(7777,()=>{
   console.log("database connected succussfully !");
 });

 

  