const mongoose = require('mongoose');

const extracurricularActivitySchema = new mongoose.Schema({
    date: { type: Date, required: true },
    event: { type: String, required: true },
    resourcePerson: { type: String, required: true },
    yearClass: { type: String, required: true },
    studentNameRegNo: { type: String, required: true },
    organizedBy: { type: String, required: true },
    prizeDetails: { type: String, required: false },
    // image1: { type: String, required: false },
    // image2: { type: String, required: false }
});

// Check if the model is already defined to avoid OverwriteModelError
const ExtracurricularActivityData = mongoose.models.ExtracurricularActivity || mongoose.model('ExtracurricularActivity', extracurricularActivitySchema);

module.exports = ExtracurricularActivityData;
