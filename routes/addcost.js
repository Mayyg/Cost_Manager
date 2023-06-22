//Amit Maor 315406710
//May Gabay 322621590

const express = require('express');
const addCostRouter = express.Router();
const costs = require('../models/costs');
const users = require('../models/users');

addCostRouter.post('/addcost', (req, res) => {
    const { user_id, year, month, day, description, category, sum } = req.body;

    const newCost = {
        id: 64,
        user_id: user_id,
        year: year,
        month: month,
        day: day,
        description: description,
        category: category,
        sum: sum
    };

    newCost.save()
        .then((addedCost) => {
            res.json(addedCost);
        })
        .catch((error) => {
            res.status(500).json({ error: 'Failed to add the cost item.' });
        });
});

module.exports = addCostRouter;
