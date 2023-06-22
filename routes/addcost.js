//Amit Maor 315406710
//May Gabay 322621590

const express = require('express');
const addCostRouter = express.Router();
const costs = require('../models/costs');
const users = require('../models/users');
const { categories } = ["food", "health", "housing", "sport", "education", "transportation", "other"];
addCostRouter.post("/", async (req, res, next) => {
    const id = Math.floor(Math.random() * 1000000);
    const cost = await new costs({...req.body, id}).save();
    res.json(cost);
});
