//Amit Maor 315406710
//May Gabay 322621590
const express = require('express');
const addCostRouter = express.Router();
const Cost = require("../models/costs");
const User = require("../models/users");
const categories = ["food", "health", "housing", "sport", "education", "transportation", "other"];

addCostRouter.post("/", async (req, res) => {
    try {
        const { user_id, year, month, day, description, category, sum } = req.body;
        const id = Math.floor(Math.random() * 1000000);
        
        if (!categories.includes(category)) {
            return res.status(400).json({ error: "Invalid category" });
        }
        
        const newCost = {
            id,
            user_id,
            year,
            month,
            day,
            description,
            category,
            sum,
        };

        const savedCost = await Cost.create(newCost);
        res.json(savedCost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = addCostRouter;

