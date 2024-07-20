const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    docName : {
        type:String
        //required :true
    },
    post : {
        type:String
        //required :true
    },
    speciality : {
        type:String
        //required :true
    },

    experience:{
        type:String
    },

    location:{
        type:String
    },

    rating:{
        type:String
    },

    photo:{
        type:String
    }
})
const productModel = new mongoose.model("Doctors",productSchema)

module.exports = productModel;