const mongoose = require("mongoose");

const AwardsSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    event: {
        type: String,
        required: true,
        trim: true
    },
    studentRegno: {
        type: String,
        required: true,
        trim: true
    },
    yearClass: {
        type: String,
        required: true,
        trim: true
    },
    organized: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model("Awards", AwardsSchema);
