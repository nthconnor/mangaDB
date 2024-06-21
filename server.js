// dependencies
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
require("dotenv").config();
const app = express();
const PORT = process.env.DEV_PORT || 4000;
const mangaController = require('./controllers/manga')

const mongoURI = "mongodb://127.0.0.1:27017/manga";

// middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(mangaController);

async function connectToMongo() {
  try {
    await mongoose.connect(mongoURI);
    console.log("mongo db connected");
  } catch (err) {
    console.error(err);
  }
}

connectToMongo();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
