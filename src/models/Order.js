const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    total_price_set: {
        shop_money: {
            amount: String,
            currency_code: String,
        },
    },
    created_at: Date,
    // Other fields can be defined here as per your requirements
});

module.exports = mongoose.model('Order', orderSchema);
