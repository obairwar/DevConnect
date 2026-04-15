const jwt=require("jsonwebtoken");
const User=require("../models/user");

const userAuth=async (req,res,next)=>{
    //read the tokken from the req cookies
    //validate the token
    //find the user
try{
    const {token}=req.cookies;
    if(!token){
        throw new Error("token is not valid...");
    }
    
    const decodedData=await jwt.verify(token,"DEV@Tinder$790")
    
    const {_id}=decodedData;
    const user=await User.findById(_id);

    if(!user){
        throw new Error("user not found...")
    }
    req.user=user;
    next();
    
}catch(err){
    res.status(400).send("error : "+err.message);
}
    
}

module.exports={
    userAuth,
}
