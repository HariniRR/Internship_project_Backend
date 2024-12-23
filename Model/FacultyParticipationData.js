const mongoose = require('mongoose');

// Define the schema for Faculty Participation
const facultyParticipationSchema = new mongoose.Schema({
    date: { type: Date, required: true }, // Date of the event
    title: { type: String, required: true }, // Title of the event
    facultyNameDesignation: { type: String, required: true }, // Faculty name and designation
    event: { type: String, required: true }, // Type of event (seminar, workshop, etc.)
    organizedBy: { type: String, required: true }, // Organization responsible for the event
    eventDetails: { type: String, required: true }, // Details about the event
    // image1: { type: String, required: false }, // Optional image or certificate
    // image2: { type: String, required: false }, // Optional image or certificate
});

// Create the model from the schema
const FacultyParticipationData = mongoose.model('FacultyParticipation', facultyParticipationSchema);

// Export the model
module.exports = FacultyParticipationData;
