//Amit Maor 315406710
//May Gabay 322621590

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const costSchema = new mongoose.Schema({
    user_id: Number,
    year: Number,
    month: Number,
    day: Number,
    id: String,
    description: String,
    category: {
        type: String,
        enum: ['food', 'health', 'housing', 'sport', 'education', 'transportation', 'other'],
    },
    sum: Number,
});
const Cost = mongoose.model('costs', costSchema);
