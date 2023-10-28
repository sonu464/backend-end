const mongoose = require("mongoose");

// setup
mongoose.connect("mongodb://127.0.0.1:27017/bidu");

// create schema
const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
});

// crete model
module.exports = mongoose.model("user", userSchema);
