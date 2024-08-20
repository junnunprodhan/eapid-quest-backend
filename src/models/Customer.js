// src/models/Customer.js
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    created_at: Date,
    default_address: {
        city: String,
    },
});

module.exports = mongoose.model('Customer', customerSchema);
