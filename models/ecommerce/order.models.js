import mongoose, { trusted } from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref:"Products"
    },
    quantity:{
        type:Number,
        required : true
    }
})


const orderSchema = mongoose.Schema({
    orderPrice:{
        type : Number,
        required : true
    },
    customer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    orderItems : {
        type : [orderItemSchema]
    },
    address:{
        type:String,
        required : true
    },
    status :{
        type :String,
        enum : ["Pending", "Cancelled" , "Delivered"],
        default : "Pending"
    }
}, {timestamps : true})

export const Order = mongoose.model('Order', orderSchema);