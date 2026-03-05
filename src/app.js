 const express= require("express");
 const app= express();
const {adminAuth,userAuth}= require("./middlewares/auth");

//middleware for admin
app.use("/admin",adminAuth);

app.get("/admin/allData",(req,res,next)=>{
   res.send("all data fetched successfully!");
});
app.get("/admin/deleteData",(req,res,next)=>{
   res.send("user data deleted successfully !");
});




app.post("/user/login",(req,res,next)=>{
   res.send("User logged in successfully !");
});

//suth for the specific function => 
app.get("/user/data",userAuth,(req,res,next)=>{
   res.send("data send successfully !");
})


 app.listen(7777,()=>{
    console.log("server is successfully listenining on port 7777...");

 });
 
 