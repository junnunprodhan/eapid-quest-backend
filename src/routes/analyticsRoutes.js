// src/routes/analyticsRoutes.js
const express = require('express');
const { getTotalSalesOverTime } = require('../controllers/analyticsController');

const router = express.Router();

router.get('/sales-over-time', getTotalSalesOverTime);

module.exports = router;
