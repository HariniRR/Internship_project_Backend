const mongoose = require('mongoose');

const cocurricularActivitySchema = new mongoose.Schema({
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
 const CocurricularActivityData = mongoose.models.CocurricularActivity || mongoose.model('CocurricularActivity', cocurricularActivitySchema);
// const CocurricularActivityData = mongoose.model('CocurricularActivity', cocurricularActivitySchema);

module.exports = CocurricularActivityData;
