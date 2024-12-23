const mongoose = require('mongoose');
const associationSchema = new mongoose.Schema({
  date: { type: Date, required: true },
    event: { type: String, required: true }, 
    resourcePerson: { type: String, required: true },
    yearClass: { type: String, required: true },
    numStudent: { type: Number, required: true },
    image1: { type: String } ,
    image2: { type: String } 


});

const AssociationData = mongoose.model('Association', associationSchema);
module.exports = AssociationData;