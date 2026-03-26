const mongoose= require("mongoose");

const userSchema= new mongoose.Schema({  
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    age:{
        type:Number,
    },
    gender:{
        type:String,
    }
});

//creating the userModel(name of the model and the schema which we will pass)=> then exporting the  model
//const User=mongoose.model("User",userSchema);
//model.exports=User;

module.exports= mongoose.model("User",userSchema);