const express = require("express");
const router = express.Router();
const Manga = require("../models/manga.js");

router.get("/seed", async (req, res) => {
  try {
    await Manga.create([
      {
        title: "Frieren: Beyond Journey's End",
        author: "Kanehito Yamada",
        genre: "Shonen",
        img: "https://i.imgur.com/B26P2NL.jpeg",
        description:
          "Taking place in a fantasy world, the story follows Frieren, an elven mage, as she embarks on a journey to reach the resting place of souls in order to reunite with her former comrade Himmel, whose Hero Party once slew the Demon King.",
        chapters: 130,
      },
      {
        title: "Jujutsu Kaisen",
        author: "Gege Akutami",
        genre: "Shonen",
        img: "https://i.imgur.com/B26P2NL.jpeg",
        description:
          "Taking place in a fantasy world, the story follows Frieren, an elven mage, as she embarks on a journey to reach the resting place of souls in order to reunite with her former comrade Himmel, whose Hero Party once slew the Demon King.",
        chapters: 130,
      },
    ]);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("internal Sever Error");
  }
});

// router.get("/", (req, res) => {
//   res.render("home.ejs");
// });

// INDEX
router.get("/", async (req, res) => {
  const manga = await Manga.find({});
  res.render("home.ejs", {
    manga: manga,
  });
});

router.get("/manga", async (req, res) => {
  const manga = await Manga.find({});
  res.render("index.ejs", {
    manga: manga,
  });
});

// NEW

// DELETE

// UPDATE

// CREATE

// EDIT

// SHOW
router.get("/manga/:id", async (req, res) => {
  const showManga = await Manga.findById(req.params.id);
  res.render("show.ejs", {
    manga: showManga,
  });
});

module.exports = router;
