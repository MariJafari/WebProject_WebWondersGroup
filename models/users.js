//importing mongoose package
const mongoose = require('mongoose');

//creating and exporting schema
const usersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  created: { type: Number, required: true },
  category: { type: String, required: true },
});

const Users = mongoose.model('Product', usersSchema);

module.exports = Product;
