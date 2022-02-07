const express = require("express");
const axios = require("axios");
const cheerio= require("cheerio");
const app = express();

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})