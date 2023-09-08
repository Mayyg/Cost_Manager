const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema(
  {
    id:Number,
    first_name: String,
    last_name: String,
    birthday: String,
  },
);
const usersModel = mongoose.model("users", usersSchema);
module.exports = usersModel;
  
