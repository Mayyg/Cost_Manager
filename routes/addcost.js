//Amit Maor 315406710
//May Gabay 322621590

const express = require('express');
const addCostRouter = express.Router();
const Cost = require('./models/costs');
const User = require('./models/users');

addCostRouter.post('/', async (req, res) => {
  const { user_id, year, month, day, description, category, sum } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ id: user_id });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Create a new cost item
    const newCost = new Cost({
      user_id,
      year,
      month,
      day,
      description,
      category,
      sum,
    });

    // Save the new cost item to the database
    const savedCost = await newCost.save();

    // Send the added cost item as a JSON response
    res.json(savedCost);
  } catch (error) {
    console.error('Error creating cost item:', error);
    res.status(500).json({ error: 'Failed to create cost item' });
  }
});

module.exports = addCostRouter;
