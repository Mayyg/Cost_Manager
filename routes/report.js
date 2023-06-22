//Amit Maor 315406710
//May Gabay 322621590

const express = require('express');
const report = express.Router();

report.get('/', function(req, res, next) {
    const { user_id, year, month } = req.body;


    const reportC = {
        food: [{"day":21,"description":"chocolate in ikea","sum":20},{"day":5,"description":"milk","sum":6}],
        health: [],
        housing: [],
        sport: [],
        education: [],
        transportation: [],
        other: []
    };

    res.status(200).json(reportC);
});

module.exports = report;