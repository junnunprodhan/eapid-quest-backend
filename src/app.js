// src/app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const analyticsRoutes = require('./routes/analyticsRoutes');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/analytics', analyticsRoutes);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB')).catch(err => console.error('MongoDB connection error:', err));

module.exports = app;
