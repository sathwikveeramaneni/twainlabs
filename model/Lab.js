const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const labSchema = new Schema({
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
  services: {
    type: Array
  }
});

module.exports = mongoose.model('Lab', labSchema);
