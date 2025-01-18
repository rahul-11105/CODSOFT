const mongoose = require("mongoose");
const userschema = require("./userSchema");

const user = mongoose.model("user",userschema);

module.exports = user;