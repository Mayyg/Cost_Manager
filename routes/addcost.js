//Amit Maor 315406710
//May Gabay 322621590
const express = require("express");
const Costs = require("../models/costs");
const Users = require("../models/users");
const categories = ["food", "health", "housing", "sport", "education", "transportation", "other"];
const addCostRouter = express.Router();

addCostRouter.post("/", async (req, res, next) => {
    const { user_id } = req.body;
    try {
        if (!categories.includes(category)) {
            return res.status(400).json({ error: "Invalid category" });
        }
        let id = Math.floor(Math.random() * 1000000);
        const cost = await new Costs({...req.body, id}).save();
        res.json(cost);
    } catch (error) {
        next(error);
    }
});
module.exports = addCostRouter;
