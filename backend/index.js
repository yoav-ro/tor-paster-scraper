const express = require("express");
const mongoose = require("mongoose");
const pastesController = require("./contollers/pasteController");
const { getPastesData } = require("./utils/requests");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3001;
const onionURL = "http://strongerw2ise74v3duebgsvug4mehyhlpa7f6kfwnas7zofs3kov7yd.onion/all"

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected!');
});

app.get("/update-db", async (req, res) => {
  try {
    const pastes = await getPastesData(onionURL);
    await pastesController.addManyPastes(pastes.reverse());
    res.json({ message: "Pastes added successfully" })
  } catch (error) {
    res.json(error)
  }
})

app.get("/get-pastes", async (req, res) => {
  try {
    const pastes = await pastesController.getAllPastes();
    res.json(pastes);
  } catch (error) {
    res.json(error)
  }
})

app.get("/latest-paste", async (req, res) => {
try {
  res.json(await pastesController.getMaxDate());
} catch (error) {
  res.json(error)
}
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})