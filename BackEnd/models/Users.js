const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name :{
        type: String,
        require:true,
    },
    email:{
        type: String,
        require:true,
    },
    password : {
        type: String,
        require:true ,
    },
    acceptTerms: {
        type: Boolean,
        require:true,
    },
    address : {
        type : String ,
        require : false,
    },
    card : {
        type : String,
        require : false,
    }
})

const Users = mongoose.model("users",userSchema)

module.exports = Users;
