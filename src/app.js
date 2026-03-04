 const express= require("express");
 const app= express();


//app.use("/route", rH1, [rH2,rH3],rh$, rh5);
app.use("/user",(req,res,next)=>{
   console.log("route handler 1");
   // res.send("response 1");
   next();
},(req,res,next)=>{
   console.log("route handler 2");
   // res.send("response 2");
   next();
},(req,res,next)=>{
   console.log("route handler 3");
   // res.send("response 3"); 
   next();
},(req,res,next)=>{
   console.log("route handler 4");
   next();
});



 app.listen(7777,()=>{
    console.log("server is successfully listenining on port 7777...");

 });
 
 