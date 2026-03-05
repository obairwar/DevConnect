 const express= require("express");
 const app= express();
const {adminAuth,userAuth}= require("./middlewares/auth");

app.use("/",(err,req,res,next)=>{
   if(err){
      //log your error
      res.status(500).send("something went wrong!");
   }
});

app.get("/userData",(req,res)=>{
   // try{
   //    //logic of DB call and get user data
      throw new Error("hfkjafknkjhsaf");
   // }catch(err){
   //    res.status(500).send("some error contact the support team")
   // }
})


//always write it in the last of the code 
// widlcard error handler
app.use("/",(err,req,res,next)=>{
   if(err){
      //log your error
      res.status(500).send("something went wrong!");
   }
});
 app.listen(7777,()=>{
    console.log("server is successfully listenining on port 7777...");

 });
 

 