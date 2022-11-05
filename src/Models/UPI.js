const mongoose = require('mongoose');

const UPI = new mongoose.Schema({
    splitwiseId: {
        type: String,
        required: true,
        unique: true
    },
    upiId: {
        type: String,
        required: true,
        unique: true
    },
});

module.exports = mongoose.model("UPI", UPI);

