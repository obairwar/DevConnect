 const express= require("express");
 const connectDB=require("./config/database");
 const app= express();
 const User=require("./models/user");
 const {validateSignUpData}=require("./utils/validation")
 const bcrypt=require("bcrypt");
 const cookieParser=require("cookie-parser");
 const jwt=require("jsonwebtoken");
 const {userAuth}=require("./middlewares/auth");

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

app.get("/profile",userAuth,async (req,res)=>{
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

app.post("/sendConnectionRequest",userAuth, async (req,res,next)=>{
   const user=req.user;
   //sending a connection request ...
   console.log("sending a connection request..");

   // res.send("connection request send...");
   res.send(User.firstName + " send a connection request !");

})



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
 

  