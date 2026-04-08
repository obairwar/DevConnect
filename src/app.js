 const express= require("express");
 const connectDB=require("./config/database");
 const app= express();
 const User=require("./models/user");
 const {validateSignUpData}=require("./utils/validation")
 const bcrypt=require("bcrypt");
 const cookieParser=require("cookie-parser");
 const jwt=require("jsonwebtoken");

 app.use(express.json());
 app.use(cookieParser());

 app.post("/signup",async (req,res)=>{ 
   //validation of data
   try{
      validateSignUpData(req);

   // Encrypt the password 
      const {firstName,lastName,emailId,password}=req.body;
      const passwordHash=await bcrypt.hash(password,10);
      console.log(passwordHash);



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

app.post("/login",async(req,res)=>{
      try{
      const {emailId,password}= req.body;

      const user= await User.findOne({emailId:emailId});
      
      if(!user){
         throw new Error ("invalid credientials...");
      }
      const isPasswordValid=await bcrypt.compare(password,user.password);

      if(isPasswordValid){
         //create a JWt token
         const token= await jwt.sign({_id:user.id},"DEV@Tinder$790");
         console.log(token);

         //addd the token to cookie and send the response back to the user
         res.cookie("token",token);
         res.send("login succussfully ..");
         }else{
            throw new Error("Invalid credientials...");
         }
      }catch(err){
         res.status(400).send("ERROR: "+ err.message);
      }
   }
)


// Get user by email
// app.get("/user", async (req,res)=>{
//    const userEmail=req.body.email;

//    try{
//       const users=await User.find({emailId:userEmail});
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
   const userEmailId= req.body.email;
   try{
      const user= await User.findOne({emailId:userEmailId});
      res.send(user);

   }catch{
         res.status(400).send("something went wrong!");

   }
});

app.get("/profile",async (req,res)=>{
      try{
      const cookies=req.cookies;

      const {token}=cookies;
      if(!token){
            throw new Error("invalid error...");
      }
      
      const decodedMessage=await jwt.verify(token,"DEV@Tinder$790");
      //console.log(decodedMessage)   { _id: '69d69d6074ea15af4afcf82e', iat: 1775673111 }
      const {_id}=decodedMessage;
      const user= await User.findById(_id);

      if(!user){
         throw new Error("user not found...");
      }

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

//delete a used from the database 
app.delete("/user",async (req,res)=>{
   const userId=req.body.userId;
   try{
      //const user= await User.findByIdAndDelete({_id:userId}) 
      const user= await User.findByIdAndDelete(userId);
      res.send("user deleted succussfully !");

   }catch(err){
      res.status(400).send("Something went wrong! ");

   }
})



//update data of the user
app.patch("/user/:userId",async (req,res)=>{
   const userId=req.params.userId;
   // const userId= req.body.userId;
   const data=req.body;
   try{
      
      const ALLOWED_UPDATES=["photoUrl","about","age","skills"];
      const isUpdateAllowed=Object.keys(data).every((k)=>
            ALLOWED_UPDATES.includes(k)
   );
   if(!isUpdateAllowed){
      throw new Error("update not allowed!");
   }
   if(data?.skills.length>10){
      throw new Error ("skills cannot be more than 10");
   }


      const user=await User.findByIdAndUpdate({_id:userId},data,{
         returnDocument:"after", //before and after
         runValidators:true,
      });
      console.log(user);
      res.send("User updated succussfully !");

   }catch(err){
      res.status(400).send("something went wrong :   "+err.message);
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
      console.log("Database cannot be connected ..." +err.message);
   });
 

  