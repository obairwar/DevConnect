const mongoose= require('mongoose');

const connectionRequestSchema= new mongoose.Schema(
    {

        fromUserId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User", //reference to the user collection
            required:true,
        },
        toUserId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,

        },

        status:{
            type:String,
            required:true,
            enum:{
                values:["ignored","interested","accepted","rejected"],
                meddage:`{VALUE} is incorrect status type`,
            }
        },
    },
    {
        timestamps:true,
    }
);




connectionRequestSchema.pre("save",function(next){
    const connectionRequest= this;
    //check if the fromUserId is same as toUserId
    if(connectionRequest.fromUserId.equals(connectionRequest.toUserId)){
        throw new Error("Cannot send the connection request to yourself")
    }
    //removed the next() here
})

const ConnectionRequest=new mongoose.model(
    "ConnectionRequest",
    connectionRequestSchema
);
module.exports=ConnectionRequest