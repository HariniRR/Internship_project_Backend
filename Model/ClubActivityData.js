const mongoose = require('mongoose');

const clubActivitySchema = new mongoose.Schema({
  date: { type: Date, required: true },
  event: { type: String, required: true },
  clubname: { type: String, required: true },
  resourcePerson: { type: String, required: true },
  yearClass: { type: String, required: true },
  studentNum: { type: Number, required: true },
  image1: { type: String },  
  image2: { type: String }
});

const ClubActivityData = mongoose.model('ClubActivity', clubActivitySchema);
module.exports = ClubActivityData;


