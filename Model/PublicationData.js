const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  title: { type: String, required: true },
  studentReg: { type: String, required: true },
  yearClass: { type: String, required: true },
  published: { type: String, required: true },
  conference: { type: String, required: true },
  volume: { type: String, required: true },
  journalName: { type: String, required: true },
  // image1: String,
  // image2: String
});

const PublicationData = mongoose.model('Publication', publicationSchema);

module.exports = PublicationData;
