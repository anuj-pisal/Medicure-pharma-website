const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name : {
        type:String
        //required :true
    },
    email : {
        type:String
        //required :true
    },
    address : {
        type:String
        //required :true
    },

    city:{
        type:String
    },

    state:{
        type:String
    },

    zip:{
        type:String
    },
    
    nameCard:{
        type:String
    },

    cardNo:{
        type:Number
    },
    
    expM:{
        type:String
    },

    expY:{
        type:Number
    },

    cvv:{
        type:String
    },

    items:{
        type:Number
    },

    price:{
        type:Number
    },

    orderDate:{
        type:String
    },
    
    arrivalDate:{
        type:String
    },
    
})
const orderModel = new mongoose.model("order",productSchema)

module.exports = orderModel;