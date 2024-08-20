// src/controllers/analyticsController.js
const Order = require('../models/Order');

exports.getTotalSalesOverTime = async (req, res) => {
    try {
        const { interval } = req.query; 
        const groupBy = getTimeGrouping(interval);

        const salesData = await Order.aggregate([
            { $group: {
                _id: groupBy,
                totalSales: { $sum: { $toDouble: '$total_price_set.shop_money.amount' } }
            }},
            { $sort: { _id: 1 } }
        ]);

        res.json(salesData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch total sales data' });
    }
};

function getTimeGrouping(interval) {
    switch (interval) {
        case 'daily': return { year: { $year: '$created_at' }, month: { $month: '$created_at' }, day: { $dayOfMonth: '$created_at' }};
        case 'monthly': return { year: { $year: '$created_at' }, month: { $month: '$created_at' }};
        case 'quarterly': return { year: { $year: '$created_at' }, quarter: { $ceil: { $divide: [{ $month: '$created_at' }, 3] } }};
        case 'yearly': return { year: { $year: '$created_at' }};
        default: return { year: { $year: '$created_at' }, month: { $month: '$created_at' }};
    }
}
