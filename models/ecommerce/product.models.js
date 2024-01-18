import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    description : {
        type :String,
        required : true,
    },
    name : {
        type :String,
        required : true,
        unique : true
    },
    // the image can be uploaded on any cloud platform and a url can be taken that can be of type string
    // this is a better approach as the database will no longer be required to deal with images seprately
    // the image url can be fetched in the frontend part of the application from the database and then can be easily accessed 
    productImage : {
        type :String,
    },
    price : {
        default: 0,
        type :Number
    },
    stock:{
        type:Number,
        default:0
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required : true
    },
    owner:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
} ,{timestamps : true});


export const Product = mongoose.model("Product" , productSchema);