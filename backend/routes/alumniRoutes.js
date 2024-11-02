import express from 'express';
import User from '../models/user.js';

const router = express.Router();

// GET /db/alumni - Get all alumni
router.get('/', async (req, res) => {
  try {
    const alumni = await User.find({});
    res.status(200).json(alumni);
  } catch (error) {
    console.error('Error fetching alumni:', error);
    res.status(500).json({ message: "Error fetching alumni", error: error.message });
  }
});

// POST /db/alumni - Create a new alumni entry
router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, description, location, category, artCategory } = req.body;

    if (!firstName && !lastName && !location && !category) {
      return res.status(400).json({
        success: false,
        message: 'Please provide required fields: name, location, and category'
      });
    }

    const alumni = await User.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Alumni created successfully',
      data: alumni
    });

  } catch (error) {
    console.error('Error creating alumni:', error);
    res.status(500).json({ success: false, message: 'Error creating alumni', error: error.message });
  }
});

export default router;