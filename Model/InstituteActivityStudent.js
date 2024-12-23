const mongoose = require('mongoose');

const instituteActivityStudentSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  event: { type: String, required: true },
  resourcePerson: { type: String, required: true },
  yearClass: { type: String, required: true },
  numStudent: { type: Number, required: true },
  professionalSociety: { type: String, required: true },
  // image1: { type: String },  // Optional fields for image paths
  // image2: { type: String }
});

const InstituteActivityStudent = mongoose.model('InstituteActivityStudent', instituteActivityStudentSchema);
module.exports = InstituteActivityStudent;
