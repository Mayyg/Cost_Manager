//Amit Maor 315406710
//May Gabay 322621590

const express = require('express');
const addCostRouter = express.Router();
const costs = require('../models/costs');
const users = require('../models/users');

addCostRouter.post('/', async (req, res) => {
  const { user_id, year, month, day, description, category, sum } = req.body;

 /* try {
    
    const isUser = await users.exists({ id: user_id }); 
    if (!isUser) { 
      const error = new Error("User does not exist"); 
      error.status = 400; 
      throw error; 
    } */

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
