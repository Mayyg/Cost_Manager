const mongoose = require("mongoose");
const categories = ["food", "health", "housing", "sport", "education", "transportation", "other"];
const costsSchema = new mongoose.Schema(
  {
    id: Number,
    user_id: Number,
    year: Number,
    month: Number,
    day: Number,
    description: String,
    sum: Number,
    category: {
      type: String,
      enum: categories,
    },
  },
);
const costsModel = mongoose.model("costs", costsSchema);
module.exports = costsModel;
