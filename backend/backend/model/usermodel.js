const mongoose = require("mongoose")
const validator = require('validator')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw Error(`email is Invalid`)
            }
        }

    },
    contact: {
        type: String,
        minlength: 10,
        maxlength: 10
    },
    password :{
        type:String,
        require:true
    },
    country :{
        type:String,
    },
    bio :{
        type:String,
    },
    birthdate :{
        type:Date,
        
    }   
})

const userModel = new mongoose.model("users", userSchema)

module.exports = userModel;
