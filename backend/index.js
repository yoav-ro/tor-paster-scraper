const express = require("express");
const mongoose= require("mongoose");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected!');
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})