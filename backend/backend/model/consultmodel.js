const mongoose = require("mongoose")
const validator = require('validator')

const consultSchema = mongoose.Schema({
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
    phone: {
        type: String,
        minlength: 10,
        maxlength: 10
    },
    date :{
        type:Date,
        require:true
    },

    time:{
        type:String,
        require:true
    },
    
    message:{
        type:String,
    }
})

const consultModel = new mongoose.model("consult", consultSchema)

module.exports = consultModel;