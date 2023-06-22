//Amit Maor 315406710
//May Gabay 322621590

const express = require('express');
const reportRouter = express.Router();

const costs = [
  { day: 21, description: 'chocolate in ikea', sum: 20, category: 'food' },
  { day: 5, description: 'milk', sum: 6, category: 'food' },
];

reportRouter.get('/', (req, res) => {
  const { year, month, user_id } = req.query;

  const filteredCosts = costs.filter(
    (cost) =>
      cost.category !== undefined &&
      cost.category !== null &&
      cost.category !== '' &&
      cost.year === Number(year) &&
      cost.month === Number(month) &&
      cost.user_id === Number(user_id)
  );

  const report = {};
  filteredCosts.forEach((cost) => {
    if (!report[cost.category]) {
      report[cost.category] = [];
    }
    report[cost.category].push({
      day: cost.day,
      description: cost.description,
      sum: cost.sum,
    });
  });

  const categories = ['food', 'health', 'housing', 'sport', 'education', 'transportation', 'other'];
  categories.forEach((category) => {
    if (!report[category]) {
      report[category] = [];
    }
  });

  res.json(report);
});

module.exports = reportRouter;
