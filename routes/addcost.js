//Amit Maor 315406710
//May Gabay 322621590

const express = require('express');
const addCostRouter = express.Router();
const costs = require('../models/costs');
const users = require('../models/users');
const { categories } = ["food", "health", "housing", "sport", "education", "transportation", "other"];
addCostRouter.get("/", async (req, res, next) => {
    try {
        const costs = await costs.find(req.query);

        const add = {};
        categories.forEach((category) => {
            add[category] = [];
        });

        costs.forEach((cost) => {
            const costItem = {
                day: cost.day,
                sum: cost.sum,
                description: cost.description,
            };
            add[cost.category].push(costItem);
        });

        res.json(add);
    } catch (error) {
        next(error);
    }
});

module.exports = addCostRouter;
