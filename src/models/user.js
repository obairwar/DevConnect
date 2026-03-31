const mongoose= require("mongoose");
const validator=require("validator");
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
        email:{
            type:String,
            required:true,
            unique:true,
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
            validate(value){
                if(!["male","female","others"].includes(value)){
                    throw new Error("gender data is not valid!");
                }
            }
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

//creating the userModel(name of the model and the schema which we will pass)=> then exporting the  model
//const User=mongoose.model("User",userSchema);
//model.exports=User;

module.exports= mongoose.model("User",userSchema);