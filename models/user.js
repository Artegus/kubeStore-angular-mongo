const moongose = require('mongoose');
const Schema = moongose.Schema;

const UserSchema = new Schema({
    _id : {
        type : Schema.ObjectId,
        auto : true
    },
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

moongose.model('Users', UserSchema)