const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  topic: {
    type: String,
    required: true
  },
  style: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  platform: {
    type: String,
    required: false
  },
  generationsUsed: {
    type: Number,
    default: 1
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
