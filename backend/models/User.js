const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    },
    hire:{
        type: String,
        required: true,
    },
    status:{
        type: Boolean,
        default: false
    }
})

const User = mongoose.model('Employer', userSchema);
module.exports = User;