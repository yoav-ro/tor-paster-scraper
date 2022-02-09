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
  const Paste = mongoose.model("Pastes", PasteSchema);
  
  module.exports = Paste;
  