//Amit Maor 315406710
//May Gabay 322621590

const express = require('express');
const addCostRouter = express.Router();
const costs = require('../models/costs');
const users = require('../models/users');
const { categories } = ["food", "health", "housing", "sport", "education", "transportation", "other"];
addCostRouter.post("/", async (req, res) => {
    try {
        const { user_id, year, month, day, description, category, sum } = req.body;
        const id = Math.floor(Math.random() * 100000);
        const cost = new costs({
            id,
            user_id,
            year,
            month,
            day,
            description,
            category,
            sum,
        });
        await cost.save();
        res.json(cost);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});
