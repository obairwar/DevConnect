 const express= require("express");
 const connectDB=require("./config/database");
 const app= express();
 const User=require("./models/user");

 app.use(express.json());


//adding the data=>
 app.post("/signup",async (req,res)=>{ 
    
   // creating a new instance of the User model
   const user= new User(req.body);

   try{
      await user.save();   //saving the user in the database => the function returns a promise=> so using async and await
      res.send("user added successfully !!");
   }catch(err){
      res.status(400).send("Error saving the user: "+ err.message);

   }
 });

// Get user by email
// app.get("/user", async (req,res)=>{
//    const userEmail=req.body.email;

//    try{
//       const users=await User.find({email:userEmail});
//       if(users.length === 0){
//          res.status(404).send("user not found");
//       }else{
//          res.send(users);
//       }

//    }catch(err){
//       res.status(400).send("something went wrong!");
//    }
// });


//get only one user
app.get("/user",async(req,res)=>{
   const userEmail= req.body.email;
   try{
      const user= await User.findOne({email:userEmail});
      res.send(user);

   }catch{
         res.status(400).send("something went wrong!");

   }
});




//FEED API => GET/feed - get all the users from the database
app.get("/feed",async (req,res)=>{
   try{
      const users= await User.find({});  //empty filter will get us all the documents from the filter
      res.send(users);

   }catch(err){
         res.send(400).send("something went wrong!");
   }

})


 //once the database is connected successfully then we will start the server
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

 

  