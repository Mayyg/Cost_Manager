//Amit Maor 315406710
//May Gabay 322621590

const express = require('express');
const addCostRouter = express.Router();
const costs = require('../models/costs');
const users = require('../models/users');

addCostRouter.post('/', async (req, res) => {
  try {
    // Extract the parameters from the request body
    const { user_id, year, month, day, description, category, sum } = req.body;

    // Check if the user_id exists in the users collection
    const user = await users.findOne({ id: user_id });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Generate a random id for the cost item
    const id = Math.random().toString(36).substring(7);

    // Create a new cost document
    const newCost = new costs({
      user_id,
      year,
      month,
      day,
      id,
      description,
      category,
      sum
    });

    // Save the new cost document
    const savedCost = await newCost.save();

    // Return the newly added cost item as the response
    res.json({ cost: savedCost });
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = addCostRouter;

