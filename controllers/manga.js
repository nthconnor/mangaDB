const express = require("express");
const router = express.Router();
const Manga = require("../models/manga.js");

router.get("/", (req, res) => {
    res.render("home.ejs")
})

module.exports = router;
