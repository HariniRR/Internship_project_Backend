const mongoose = require("mongoose");

const programSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    event: {
        type: String,
        required: true,
        trim: true
    },
    resourcePerson: {
        type: String,
        required: true,
        trim: true
    },
    programename: {
        type: String,
        required: true,
        trim: true
    },
    benefited: {
        type: String,
        required: true,
        trim: true
    },
    // Uncomment these fields if storing image paths
    // image1: {
    //     type: String,
    //     required: false
    // },
    // image2: {
    //     type: String,
    //     required: false
    // }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model("ProgramData", programSchema);
