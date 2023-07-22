const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name : {
    trype: String,
    required: [true, 'Please add a name']
  },
  email: {
    trype: String,
    required: [true, 'Please add an email'],
    unique: true,
    trim: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      , "Please add a valid email"]
  },
  password : {
    trype: String,
    required: [true, 'Please add a password'],
    minLength: [6, "Password must be upto 6 characters"],
    maxLength: [23, "Password is too long"],
  },
  photo: {
    type: String,
    required: [true, 'Please add a profile photo'],
    default: 'http://i.ibb.co/4pDNDk1/avatar.png'
  },
  phone : {
    type: String,
    default: "+234"
  },
  bio: {
    type: String,
    maxLength: [250, "Bio can't be more than 250 caharacters"],
    default:"bio"
  }
}, {
  timestamps: true,
});

const User = mongoose.model("User", userSchema);

module.exports = User;