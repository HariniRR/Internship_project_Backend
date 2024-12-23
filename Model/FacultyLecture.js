const mongoose = require('mongoose');

const facultyLectureSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    title: { type: String, required: true },
    designation: { type: String, required: true },
    event: { type: String, required: true },
    organizedby: { type: String, required: true },
});

const FacultyLecture = mongoose.model('FacultyLecture', facultyLectureSchema);
module.exports = FacultyLecture;
