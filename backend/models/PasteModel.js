const mongoose= require("mongoose");

const PasteSchema = mongoose.Schema({
    title: {
      type: String,
      required,
    },
    content: {
      type: String,
      required,
    },
    author: {
      type: String,
      required,
    },
    date: {
      type: Date,
      default: false,
    },
  });
  const Pastes = mongoose.model("Pastes", PasteSchema);
  
  module.exports = Pastes;
  