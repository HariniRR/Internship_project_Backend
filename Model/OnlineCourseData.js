const mongoose = require('mongoose');

const onlineCourseSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    platform: { type: String, required: true },
    studentNameRegno: { type: String, required: true },
    course: { type: String, required: true },
    register: { type: String, required: true },
    score: { type: String, required: true },
    // image1: { type: String }  
});

const OnlineCourseData = mongoose.model('OnlineCourse', onlineCourseSchema);

module.exports = OnlineCourseData;
