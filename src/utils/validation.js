const validator= require('validator');

const validateSignUpData=(req)=>{
    const{ firstName,lastName,emailId, password}=req.body;

    if(!firstName || !lastName){
        throw new Error("Name is not valid...")
    }
    // if(firstName.length<4 || firstName.length>50){
    //     throw new Error("name should be 4-50 characters");
    // }
    else if(!validator.isEmail(emailId)){
            throw new Error("emialID is not valid")
    }else if(!validator.isStrongPassword(password)){
        throw new Error("enter the strong password ....");

    }
};


const validateEditProfileData= (req)=>{
    const allowedEditFields=[
        "firstName",
        "lastName",
        "emailId",
        "PhotoUrl",
        "gender",
        "age",
        "skills",
        "about",
    ];
    const isEditAllowed=Object.keys(req.body).every((field)=>
    allowedEditFields.includes(field)
    );

    return isEditAllowed
}




module.exports={
    validateSignUpData,
    validateEditProfileData,

};