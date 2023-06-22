//Amit Maor 315406710
//May Gabay 322621590

const express = require('express');
const addCostRouter = express.Router();

addCostRouter.post('/', (req, res) => {
  const newCost = req.body;
  const newId = Math.max(...costs.map((cost) => cost.id)) + 1;
  newCost.id = newId;
  costs.push(newCost);
  res.json(newCost);
});

module.exports = addCostRouter;
