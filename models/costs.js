//Amit Maor 315406710
//May Gabay 322621590

const mongoose = require("mongoose");

const costSchema = new mongoose.Schema({
    id: Number,
    user_id: Number,
    year: Number,
    month: Number,
    day: Number,
    description: String,
    category: {
        type: String,
        enum: ['food', 'health', 'housing', 'sport', 'education', 'transportation', 'other'],
    },
    sum: Number,
});

const Cost = mongoose.model("Cost", costSchema);
module.exports = Cost;

