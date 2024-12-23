const mongoose = require('mongoose');

const trainingSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    resourcePerson: { type: String, required: true }, 
    trainingNature: { type: String, required: true }, 
    yearClass: { type: String, required: true }, 
    numOfDays: { type: Number, required: true }, 
    image1: { type: String, default: null }, 
    image2: { type: String, default: null } 
});

const TrainingData = mongoose.model('Training', trainingSchema);
module.exports = TrainingData;