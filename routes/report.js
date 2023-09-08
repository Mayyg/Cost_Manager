const express = require("express");
const allCosts = require("../models/costs"); 
const allUsers = require("../models/users");
const categories = ["food", "health", "housing", "sport", "education", "transportation", "other"];
const reportRouter = express.Router(); 
reportRouter.get("/", async (req, res, next) => { 
  try {
    const costs = await allCosts.find(req.query); 
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
    const userExists = await allUsers.exists({ id: req.query.user_id });
    res.json(result); 
  } catch (error) {
    next(error);
  }
});
module.exports = reportRouter; 
