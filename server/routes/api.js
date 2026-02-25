const express = require('express');
const router = express.Router();
const scriptController = require('../controllers/scriptController');
const rateLimit = require('express-rate-limit');
const { body } = require('express-validator');

// Rate limiting for generation endpoint
const generateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests per window
  message: { error: 'Too many requests, please try again later' }
});

const validateScript = [
  body('topic').trim().notEmpty().withMessage('Topic is required').isLength({ min: 10 }).withMessage('Topic must be at least 10 characters'),
  body('style').notEmpty().withMessage('Style is required'),
  body('duration').notEmpty().withMessage('Duration is required'),
  body('email').isEmail().withMessage('Please provide a valid email address'),
];

router.post('/generate-script', generateLimiter, validateScript, scriptController.generateScript);
router.get('/admin/users', scriptController.getAllUsers);

module.exports = router;
