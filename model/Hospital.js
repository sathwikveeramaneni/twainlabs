const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hospitalSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  no_of_ratings: {
    type: Number,
    default: 0
  },
  services: {
    type: Array
  }
});

module.exports = mongoose.model('Hospital', hospitalSchema);
