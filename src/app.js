 const express= require("express");
 const app= express();


//creating routes and rout handlers
//this will match all the HTTP mehod API calls to /test
 app.use("/test",(req,res)=>{
    res.send("hello from the /test ");
 });
 app.use("/hello",(req,res)=>{
    res.send("hello hello hello ");
 });

 app.use("/newtab",(req,res)=>{
    res.send("hello from the new tab");
 });

//   app.use("/",(req,res)=>{
//     res.send("hello from dashboard");
//  });


 //this will only handle GET call to /user
 app.get("/user",(req,res)=>{
   res.send({firstName:"ubair",lastName:"war"});
 });
 
 app.post("/user",(req,res)=>{
   //saved data to the DB
   res.send("Data successfully saved to the database!");

 });

 app.delete("/user",(req,res)=>{
   res.send("user deleted successfully!");
 });


 app.listen(7777,()=>{
    console.log("server is successfully listenining on port 7777...");

 });

  