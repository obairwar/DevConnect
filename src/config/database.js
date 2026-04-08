require("dotenv").config();

const mongoose=require("mongoose");
const connectDB=async ()=>{
    await mongoose.connect(
        process.env.DB_URL
    )
}
//mongoose.connecct return the promise

module.exports=connectDB;
