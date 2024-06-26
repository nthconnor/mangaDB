// dependencies
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const mangaController = require('./controllers/manga')

const mongoURI = process.env.MONGOURI

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

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
