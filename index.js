const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.use(express.json());

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

app.use("/admin",adminRoutes);
app.use("/user",userRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(result => {
    app.listen(process.env.PORT);
  })
  .catch(err => {
    console.log(err);
  });
