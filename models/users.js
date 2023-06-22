//Amit Maor 315406710
//May Gabay 322621590

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
  
