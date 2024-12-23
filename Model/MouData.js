const mongoose = require("mongoose");

const MouSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    event: {
        type: String,
        required: true,
    },
    companyname: {
        type: String,
        required: true,
    },
    resourcePerson: {
        type: String,
        required: true,
    },
    yearClass: {
        type: String,
        required: true,
    },
    studentNum: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true, 
});

module.exports = mongoose.model("MouData", MouSchema);
