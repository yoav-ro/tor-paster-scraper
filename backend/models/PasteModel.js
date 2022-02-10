const mongoose= require("mongoose");

const PasteSchema = mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
      default: false,
    },
  });
  const Paste = mongoose.model("Pastes", PasteSchema);
  
  module.exports = Paste;
  