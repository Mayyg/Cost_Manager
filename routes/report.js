//Amit Maor 315406710
//May Gabay 322621590
const express = require('express');
const reportRouter = express.Router();
const categories = ['food', 'health', 'housing', 'sport', 'education', 'transportation', 'other'];
const Cost = require("../models/costs");
const User = require("../models/users");

reportRouter.get("/", async (req, res, next) => {
  try {
    const { user_id, month, year } = req.query;
    const costs = await Cost.find({ user_id, month, year });
    const result = {};
    categories.forEach((category) => {
      result[category] = [];
    });
    costs.forEach((cost) => {
      const costItem = {
        day: cost.day,
        sum: cost.sum,
        description: cost.description,
      };
      result[cost.category].push(costItem);
    });
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = reportRouter;
