const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CubeSchema = new Schema({
    _id : {
        type : Schema.ObjectId,
        auto : true
    },
    name : {
        type : String,
        required : true
    },
    category : {
        type : String,
    },
    quantity : {
        type : Number
    },
    brand : {
        type : String
    },
    dimensions : {
        type : String 
    },
    purchasePrice : {
        type : Number,
        required : true
    },
    salePrice : {
        type : Number,
        required : true
    },
    photo : {
        type : String
    }
});


mongoose.model('Cubes', CubeSchema);