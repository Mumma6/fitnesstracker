const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true, // Removing white-spaces from username
    minlength: 3,
    maxlength: 15
  },
}, {
  timestamps: true,
});

const User = mongoose.model("User", userSchema);

module.exports = User;