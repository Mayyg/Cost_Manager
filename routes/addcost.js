//Amit Maor 315406710
//May Gabay 322621590

const express = require("express");
const addcost = express.Router();

addcost.post("/", async (req, res) => {
    const { user_id, year, month, day, description, category, sum } = req.body;


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
    res.json(newCost);
});

module.exports = addcost;
