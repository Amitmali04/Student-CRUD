const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    
    mobile: {
        type: Number,
        required: true
    },
    
    add: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});

const students = new mongoose.model("student",StudentSchema);


module.exports = students;