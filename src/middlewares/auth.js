const adminAuth=(req,res,next)=>{
    console.log("admin autth is getting checked!!")
    const token="xyz";
    const isAdminAutharised= token ==="xyz";
    if(!isAdminAutharised){
        res.status(401).send("unauthorized request");
    }else{
        next();
    }
}

const userAuth=(req,res,next)=>{
    console.log("user Auth is getting checked ")
    const token="aadjf";
    const isUserAuth= token==="abc";
    if(!isUserAuth){
        res.status(401).send("unauthorised request");

    }else{
        next();
    }
}

module.exports={
    adminAuth,
    userAuth,
}
