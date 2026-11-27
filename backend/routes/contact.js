const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const MESSAGES_FILE = path.join(__dirname, '../data/messages.json');

// Ensure messages.json exists
if (!fs.existsSync(MESSAGES_FILE)) {
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify([], null, 2), 'utf8');
}

/**
 * Validates an email address format
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Sanitizes input string to prevent XSS
 * @param {string} str
 * @returns {string}
 */
function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

/**
 * Validates the contact form fields
 * @param {object} body - Request body
 * @returns {{ valid: boolean, errors: string[] }}
 */
function validateContactForm(body) {
  const errors = [];
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { valid: false, errors: ['A valid contact form is required.'] };
  }

  if (!body.name || typeof body.name !== 'string' || body.name.trim().length < 2) {
    errors.push('Name is required and must be at least 2 characters long.');
  }
  if (typeof body.name === 'string' && body.name.trim().length > 100) {
    errors.push('Name must be 100 characters or less.');
  }

  if (!body.email || typeof body.email !== 'string' || !isValidEmail(body.email.trim())) {
    errors.push('A valid email address is required.');
  }

  if (!body.subject || typeof body.subject !== 'string' || body.subject.trim().length < 2) {
    errors.push('Subject is required and must be at least 2 characters long.');
  }
  if (typeof body.subject === 'string' && body.subject.trim().length > 200) {
    errors.push('Subject must be 200 characters or less.');
  }

  if (!body.message || typeof body.message !== 'string' || body.message.trim().length < 2) {
    errors.push('Message is required and must be at least 2 characters long.');
  }
  if (typeof body.message === 'string' && body.message.trim().length > 5000) {
    errors.push('Message must be 5000 characters or less.');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Saves message to local JSON store
 */
function saveMessageToFile(messageData) {
  try {
    let messages = [];
    if (fs.existsSync(MESSAGES_FILE)) {
      const data = fs.readFileSync(MESSAGES_FILE, 'utf8');
      messages = JSON.parse(data || '[]');
    }
    messages.unshift(messageData);
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Failed to save message to file:', err.message);
    return false;
  }
}

/**
 * POST /api/contact
 * Handles contact form submissions
 */
router.post('/', async (req, res) => {
  try {
    // Validate input
    const validation = validateContactForm(req.body);
    if (!validation.valid) {
      return res.status(400).json({
        success: false,
        message: validation.errors[0] || 'Validation failed',
        errors: validation.errors
      });
    }

    // Sanitize inputs
    const name = sanitize(req.body.name);
    const email = sanitize(req.body.email);
    const subject = sanitize(req.body.subject);
    const message = sanitize(req.body.message);

    const messageRecord = {
      id: Date.now().toString(),
      name,
      email,
      subject,
      message,
      createdAt: new Date().toISOString()
    };

    // Save to local message storage
    if (!saveMessageToFile(messageRecord)) {
      return res.status(503).json({ success: false, message: 'Could not save your message. Please try again later.' });
    }

    // Check if SMTP is configured
    const smtpConfigured =
      process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS;

    let emailForwarded = false;
    if (smtpConfigured) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT, 10) || 587,
          secure: process.env.SMTP_SECURE === 'true',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
          }
        });

        const mailOptions = {
          from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
          to: process.env.CONTACT_EMAIL || 'chetanbiranje@proton.me',
          replyTo: email,
          subject: `[Portfolio] ${subject}`,
          text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0b0f19; color: #e2e8f0; padding: 20px; border-radius: 8px; border: 1px solid #10b981;">
              <h2 style="color: #10b981; margin-top: 0;">📩 New Portfolio Message</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #38bdf8;">${email}</a></p>
              <p><strong>Subject:</strong> ${subject}</p>
              <hr style="border: 1px solid #1e293b;" />
              <p><strong>Message:</strong></p>
              <div style="background: #020617; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981; white-space: pre-wrap;">${message}</div>
            </div>
          `
        };

        await transporter.sendMail(mailOptions);
        emailForwarded = true;
        console.log(`✅ Email forwarded successfully to ${process.env.CONTACT_EMAIL || 'chetanbiranje@proton.me'}`);
      } catch (emailErr) {
        console.warn('⚠️ SMTP send error (saved to messages.json instead):', emailErr.message);
      }
    }

    return res.status(200).json({
      success: true,
      message: emailForwarded ? 'Message saved and forwarded.' : 'Message saved successfully.',
    });
  } catch (error) {
    console.error('❌ Contact form error:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal server error. Please email directly at chetanbiranje@proton.me'
    });
  }
});

module.exports = router;
