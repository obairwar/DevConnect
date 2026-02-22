 const express= require("express");
 const app= express();


//creating routes and rout handlers

 app.use("/test",(req,res)=>{
    res.send("hello from the /test ");
 });
 app.use("/hello",(req,res)=>{
    res.send("hello hello hello ");
 });

 app.use("/newtab",(req,res)=>{
    res.send("hello from the new tab");
 });

  app.use("/",(req,res)=>{
    res.send("hello from dashboard");
 });


 app.listen(7777,()=>{
    console.log("server is successfully listenining on port 7777...");

 });

 