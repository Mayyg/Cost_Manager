const express = require("express");
const allCosts = require("../models/costs"); 
const allUsers = require("../models/users"); 
const addCostRouter = express.Router(); 
addCostRouter.post("/", async (req, res, next) => { 
  const { user_id, year, month, day, description, category, sum } = req.body;
  try {
   let id = (new Date()).getTime();
   const newCost = new allCosts({
      id,
      user_id,
      year,
      month,
      day,
      description,
      category,
      sum
    });
    const savedCost = await newCost.save();
     res.json(savedCost);
  } catch (error) {
    next(error); 
  }
});
module.exports = addCostRouter;
