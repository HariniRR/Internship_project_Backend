const mongoose = require('mongoose');

const valueAddedCourseSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    yearclass: { type: String, required: true },
    nameregno: { type: String, required: true },
    vacname: { type: String, required: true },
    organizedby: { type: String, required: true },
    grade: { type: String, required: true },
    title: { type: String, required: true }, 
});

const ValueAddedCourseData = mongoose.model('ValueAddedCourse', valueAddedCourseSchema);
module.exports = ValueAddedCourseData;

