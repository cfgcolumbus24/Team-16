import express from 'express';
import Test from '../models/test.js';
import User from '../models/user.js';

const router = express.Router();

// get all test messages
router.get('/', async (req, res) => {
  try {
    const todos = await Test.find({});
    res.status(200).json(todos);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
});

// create new test
router.post('/', async (req, res) => {
  try {
    const todo = await User.create(req.body);
    res.status(200).json(todo);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message});
  }
});

export default router;