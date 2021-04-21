const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  fullName: {
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
  appointment: {
      type: Object
  }
});

module.exports = mongoose.model('Doctor', doctorSchema);
