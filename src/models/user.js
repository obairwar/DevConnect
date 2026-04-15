const mongoose= require("mongoose");
const validator=require("validator");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");


const userSchema= new mongoose.Schema(
    {  
        firstName:{
            type:String,
            required :true,//user will definitely give the first name , otherwise the moongose will not allow the INCERTION INTO THE DATA BASE
            minLength:5,
            maxLength:30,
        },
        lastName:{
            type:String,
        },
        emailId:{
            type:String,
            required:true,
            unique:true, //MongoDb actomatically creates the index => unique:true
            lowercase:true,
            trim:true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("invalid email address");
                }
            }
        },
        password:{
            type:String,
            required:true,
            validate(value){
                console.log("validator running ");
                if(!validator.isStrongPassword(value)){
                    throw new Error("not a strong password !"+value);
                }
            }
        },
        age:{
            type:Number,
            min:18,// for numbers we use "min" and for string we use "minLength"
        },
        gender:{
            type:String,

            enum:{
                values:["male","female","other"],
                message:`{VALUE} id mot a valif gender type`,
            },

            // validate(value){
            //     if(!["male","female","others"].includes(value)){
            //         throw new Error("gender data is not valid!");
            //     }
            // }
        },
        photourl:{
            type:String,
            //default:"https://t4.ftcdn.net/jpg/00/64/67/27/240_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg",
        },
        about:{
            type:String,
            // default:"this is the default about of the user",
        },
        skills:{
            type:[String],  //array of strings
        },
    },
    {
        timestamps:true,
    }
);

connectionRequestSchema.index({fromUserId:1, toUserId:1}); //Compound index 

userSchema.methods.getJWT=async function(){ //don't use arrow fn here
    const user=this;
    const token=await jwt.sign({_id:user._id},"DEV@Tinder$790",{
        expiresIn:"7d",
    });
    return token;

};

userSchema.methods.validatePassword=async function(passwordInputByUser){
    const user=this;
    const passwordHash=user.password;
    
    const isPasswordValid=await bcrypt.compare(
        passwordInputByUser,
        passwordHash
    );
        return isPasswordValid;
}
module.exports= mongoose.model("User",userSchema);