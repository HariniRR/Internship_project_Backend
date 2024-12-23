const mongoose = require('mongoose');

const consultancySchema = new mongoose.Schema({
  date: { type: Date, required: true },
  event: { type: String, required: true },
  companyname: { type: String, required: true },
  resourcePerson: { type: String, required: true },
  amount: { type: String, required: true },
  status: { type: String, required: true },
  // image1: { type: String },
  // image2: { type: String }
});

let ConsultancyData;
try {
  ConsultancyData = mongoose.model('Consultancy');
} catch (error) {
  ConsultancyData = mongoose.model('Consultancy', consultancySchema);
}

module.exports = ConsultancyData;
