const User = require('../models/User');
const { generateAiScript } = require('../services/sambaNova');
const { validationResult } = require('express-validator');
const { successResponse, errorResponse } = require('../utils/apiResponse');

exports.generateScript = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, errors.array()[0].msg, 400, errors.array());
  }

  const { topic, style, duration, platform, email } = req.body;

  try {
    // Check for existing user to manage 3-generation limit
    let user = await User.findOne({ email });

    if (user) {
      if (user.generationsUsed >= 3) {
        return errorResponse(res, 'You have reached your limit of 3 free scripts. Upgrade to continue!', 403);
      }
      // Update existing user usage
      user.generationsUsed += 1;
      user.topic = topic;
      user.style = style;
      user.duration = duration;
      user.platform = platform;
      await user.save();
    } else {
      // Save new lead
      user = new User({
        email,
        topic,
        style,
        duration,
        platform,
        generationsUsed: 1
      });
      await user.save();
    }

    // Generate AI Script
    const script = await generateAiScript({ topic, style, duration, platform });

    return successResponse(res, script, 'Script generated successfully');
  } catch (error) {
    console.error('Error in generateScript controller:', error);
    return errorResponse(res, error.message || 'Failed to generate script', 500);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    return successResponse(res, users, 'Users fetched successfully');
  } catch (error) {
    return errorResponse(res, 'Failed to fetch users', 500);
  }
};
