//Amit Maor 315406710
//May Gabay 322621590

const express = require('express');
const addCostRouter = express.Router();
const costs = require('../models/costs');
const users = require('../models/users');

addCostRouter.post('/', async (req, res) => {
    const { 
        user_id, 
        year, 
        month, 
        day, 
        description, 
        category, 
        sum 
    } = req.body;

    try {
        const user = await User.findOne({ id: user_id });
      
        if(!user) {
            res.status(400).json('user doesn\'t exists');
            return;
        }
        const cost = new Cost({
        user_id,
        year,
        month,
        day,
        description,
        category,
        sum,
        });
        const savedCost = await cost.save()
        res.json(savedCost);
    } catch (error) {
        res.status(500).json("failed to add cost");
    }
});

module.exports = addCostRouter;
