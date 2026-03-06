const mongoose=require("mongoose");
const connectDB=async ()=>{
    await mongoose.connect(
        "mongodb+srv://ubair:ubairwar@cluster0.hekoe9v.mongodb.net/devConnect"
    )
}

module.exports=connectDB;
