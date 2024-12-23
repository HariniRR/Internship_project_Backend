const mongoose = require("mongoose");

const FacultyCourseSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    platform: {
        type: String,
        required: true,
    },
    studentNameRegno: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    register: {
        type: String,
        required: true,
    },
    score: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("FacultyCourse", FacultyCourseSchema);
