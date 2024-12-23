const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    studentname: {
        type: String,
        required: true
    },
    yearClass: {
        type: String,
        required: true
    },
    completed: {
        type: String,
        required: true
    },
    internshipDate: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("Internship", internshipSchema);
