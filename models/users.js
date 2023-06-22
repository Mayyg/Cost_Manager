//Amit Maor 315406710
//May Gabay 322621590

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    birthday: String,
});
const users = mongoose.model('users', userSchema);
