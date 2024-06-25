const express = require("express");
const router = express.Router();
const Manga = require("../models/manga.js");

router.get("/", async (req, res) => {
  const manga = await Manga.find({});
  res.render("home.ejs", {
    manga: manga,
  });
});

// INDEX
router.get("/collection", async (req, res) => {
  const manga = await Manga.find({});
  res.render("index.ejs", {
    manga: manga,
  });
});

// NEW
router.get("/collection/add", (req, res) => {
  res.render("new.ejs");
});

// DELETE
router.delete("/manga/:id", async (req, res) => {
  try {
    await Manga.findByIdAndDelete(req.params.id);
    res.redirect("/collection");
  } catch (err) {
    console.error(err);
  }
});

// UPDATE
router.put("/manga/:id", async (req, res) => {
  try {
    const updatedManga = await Manga.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.redirect(`/manga/${req.params.id}`);
  } catch (err) {
    console.error(err);
  }
});

// CREATE
router.post("/collection", async (req, res) => {
  try {
    const newManga = await Manga.create(req.body);
    res.redirect("/collection");
  } catch (err) {
    console.error(err);
  }
});

// EDIT
router.get("/manga/:id/edit", async (req, res) => {
  try {
    const foundManga = await Manga.findById(req.params.id);
    res.render("edit.ejs", {
      manga: foundManga,
    });
  } catch (err) {
    console.error(err);
  }
});

// SHOW
router.get("/manga/:id", async (req, res) => {
  const showManga = await Manga.findById(req.params.id);
  res.render("show.ejs", {
    manga: showManga,
  });
});

module.exports = router;
