const mongoose = require('mongoose');

const infrastructureSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    infrastructure: { type: String, required: true },  // Name of the infrastructure development
    remarks: { type: String, required: true },
});

const InfrastructureData = mongoose.model('Infrastructure', infrastructureSchema);
module.exports = InfrastructureData;
