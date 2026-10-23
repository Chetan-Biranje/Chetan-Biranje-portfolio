const express = require('express');
const router = express.Router();
const path = require('path');

// Load portfolio data
const portfolio = require(path.join(__dirname, '..', 'data', 'portfolio.json'));

/**
 * GET /api/profile
 * Returns the full profile information
 */
router.get('/profile', (req, res) => {
  try {
    res.json({
      success: true,
      data: portfolio.profile
    });
  } catch (error) {
    console.error('Error fetching profile:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch profile data'
    });
  }
});

/**
 * GET /api/skills
 * Returns skills grouped by category
 */
router.get('/skills', (req, res) => {
  try {
    res.json({
      success: true,
      data: portfolio.skills
    });
  } catch (error) {
    console.error('Error fetching skills:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch skills data'
    });
  }
});

/**
 * GET /api/experience
 * Returns work experience entries
 * Optional query param: ?type=cybersecurity to filter by type
 */
router.get('/experience', (req, res) => {
  try {
    let data = [...portfolio.experience];

    // Optional filtering by type
    const { type } = req.query;
    if (type) {
      data = data.filter(
        (exp) => exp.type.toLowerCase() === type.toLowerCase()
      );
    }

    res.json({
      success: true,
      count: data.length,
      data
    });
  } catch (error) {
    console.error('Error fetching experience:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch experience data'
    });
  }
});

/**
 * GET /api/education
 * Returns education entries
 */
router.get('/education', (req, res) => {
  try {
    res.json({
      success: true,
      count: portfolio.education.length,
      data: portfolio.education
    });
  } catch (error) {
    console.error('Error fetching education:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch education data'
    });
  }
});

/**
 * GET /api/projects
 * Returns project entries
 */
router.get('/projects', (req, res) => {
  try {
    res.json({
      success: true,
      count: portfolio.projects.length,
      data: portfolio.projects
    });
  } catch (error) {
    console.error('Error fetching projects:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch projects data'
    });
  }
});

/**
 * GET /api/certifications
 * Returns certification entries
 */
router.get('/certifications', (req, res) => {
  try {
    res.json({
      success: true,
      count: portfolio.certifications.length,
      data: portfolio.certifications
    });
  } catch (error) {
    console.error('Error fetching certifications:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch certifications data'
    });
  }
});

/**
 * GET /api/volunteering
 * Returns volunteering entries
 */
router.get('/volunteering', (req, res) => {
  try {
    res.json({
      success: true,
      count: portfolio.volunteering.length,
      data: portfolio.volunteering
    });
  } catch (error) {
    console.error('Error fetching volunteering:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch volunteering data'
    });
  }
});

/**
 * GET /api/organizations
 * Returns organization memberships
 */
router.get('/organizations', (req, res) => {
  try {
    res.json({
      success: true,
      count: portfolio.organizations.length,
      data: portfolio.organizations
    });
  } catch (error) {
    console.error('Error fetching organizations:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch organizations data'
    });
  }
});

module.exports = router;
