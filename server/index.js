require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Performance Middleware
app.use(helmet());
app.use(compression());
app.use(morgan('dev'));
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://localhost:5000',
  process.env.FRONTEND_URL,
  'https://script-writer-beige.vercel.app',
  'https://script-writer-dnex.vercel.app'
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    const isLocalhost = origin.startsWith('http://localhost:');
    const isVercel = origin.endsWith('.vercel.app');
    const isAllowedCustom = allowedOrigins.includes(origin);

    if (isLocalhost || isVercel || isAllowedCustom) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api', apiRoutes);

// Basic health check
app.get('/', (req, res) => {
  res.send('AI Script Generator API is running...');
});

const { errorResponse } = require('./utils/apiResponse');

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  return errorResponse(res, 'Internal Server Error', 500, process.env.NODE_ENV === 'development' ? err.message : null);
});

if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
