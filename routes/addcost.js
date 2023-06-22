//Amit Maor 315406710
//May Gabay 322621590

const express = require('express');
const addCostRouter = express.Router();
const costs = require('../models/costs');
const users = require('../models/users');
const { categories } = ["food", "health", "housing", "sport", "education", "transportation", "other"];
addCostRouter.post("/addcost", (req, res) => {
    const { user_id, year, month, day, description, category, sum } = req.body;
        const id = Math.floor(Math.random() * 1000000);
        const newCost = new costs({
            id,
            user_id,
            year,
            month,
            day,
            description,
            category,
            sum,
        });
        newCost.save((err, cost) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: "Failed to add cost item." });
            } else {
                res.json({ costs });
            }
        });
});
