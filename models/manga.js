const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mangaSchema = new Schema({
  title: { type: String, required: [true, "Title is required"]},
  author: { type: String, required: true },
  genre: { type: String, required: true },
  img: { type: String, required: true },
  description: { type: String },
});

const Manga = mongoose.model("Manga", mangaSchema);

module.exports = Manga;
