const mongoose = require('mongoose');

const ProdSchema = mongoose.Schema({
    Name:{
        type:String
    },

    Title2:{
        type:String
    },

    Price:{
        type:Number
    }
})

const ProdModel = mongoose.model("Medicines", ProdSchema);

module.exports = ProdModel;