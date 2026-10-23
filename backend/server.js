require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const profileRoutes = require('./routes/profile');
const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// =============================================================================
// Middleware
// =============================================================================

// Security headers via Helmet
app.use(helmet());

// CORS configuration
const allowedOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(',').map((origin) => origin.trim())
  : ['http://localhost:3000', 'http://localhost:5173', 'https://chetanbiranje.vercel.app'];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (mobile apps, curl, Postman, etc.)
      if (!origin) return callback(null, true);

      // Check explicit allowed origins or any vercel.app preview deployment
      if (
        allowedOrigins.includes(origin) ||
        origin.endsWith('.vercel.app') ||
        origin.includes('localhost')
      ) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  })
);

// Body parsing
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// General rate limiting
const generalLimiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS, 10) || 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS, 10) || 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests. Please try again later.'
  }
});
app.use(generalLimiter);

// Stricter rate limiting for contact form
const contactLimiter = rateLimit({
  windowMs: parseInt(process.env.CONTACT_RATE_LIMIT_WINDOW_MS, 10) || 60 * 60 * 1000, // 1 hour
  max: parseInt(process.env.CONTACT_RATE_LIMIT_MAX_REQUESTS, 10) || 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many contact requests. Please try again later.'
  }
});

// =============================================================================
// Routes
// =============================================================================

// Health check / API index
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: "Chetan Biranje's Portfolio API",
    version: '1.0.0',
    endpoints: [
      'GET  /api/profile',
      'GET  /api/skills',
      'GET  /api/experience',
      'GET  /api/experience?type=cybersecurity',
      'GET  /api/education',
      'GET  /api/projects',
      'GET  /api/certifications',
      'GET  /api/volunteering',
      'GET  /api/organizations',
      'POST /api/contact'
    ]
  });
});

// Mount the profile router at /api — it handles /api/profile, /api/skills, etc.
app.use('/api', profileRoutes);

// Contact form (with stricter rate limiting)
app.use('/api/contact', contactLimiter, contactRoutes);

// =============================================================================
// Error Handling
// =============================================================================

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.originalUrl} not found`
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('🔥 Server Error:', err.message);

  // Handle CORS errors
  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({
      success: false,
      message: 'CORS: Origin not allowed'
    });
  }

  res.status(err.status || 500).json({
    success: false,
    message:
      process.env.NODE_ENV === 'production'
        ? 'Internal server error'
        : err.message
  });
});

// =============================================================================
// Start Server
// =============================================================================

app.listen(PORT, () => {
  console.log('');
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║                                                        ║');
  console.log('║   🛡️  Chetan Biranje Portfolio API                      ║');
  console.log('║   DFIR | SOC | Blue Team | Cybersecurity               ║');
  console.log('║                                                        ║');
  console.log(`║   🚀 Server running on port ${PORT}                        ║`);
  console.log(`║   🌐 http://localhost:${PORT}                              ║`);
  console.log(`║   📡 Environment: ${(process.env.NODE_ENV || 'development').padEnd(12)}                   ║`);
  console.log('║                                                        ║');
  console.log('╚══════════════════════════════════════════════════════════╝');
  console.log('');
});

module.exports = app;
