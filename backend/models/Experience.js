const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    role:
    {
        type: String,
        required: true,
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status:{
        type: Boolean,
        required: true,
    },
    
});

module.exports = Experience = mongoose.model('experience', ExperienceSchema);