//Amit Maor 315406710
//May Gabay 322621590

const express = require('express');
const reportRouter = express.Router();
reportRouter.get("/report", async (req, res) => {
  try {
    const { user_id, month, year } = req.query;
    const monthNumber = parseInt(month);
    const yearNumber = parseInt(year);
    const costs = await Cost.find({ user_id, month: monthNumber, year: yearNumber });
    const report = {
      food: [],
      health: [],
      housing: [],
      sport: [],
      education: [],
      transportation: [],
      other: []
    };
    costs.forEach(cost => {
      const { day, description, sum, category } = cost;
      report[category].push({ day, description, sum });
    });
    res.json(report);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
