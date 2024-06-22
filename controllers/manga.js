const express = require("express");
const router = express.Router();
const Manga = require("../models/manga.js");

// router.get("/seed", async (req, res) => {
//   try {
//     await Manga.create([
//       {
//         title: "Chainsaw Man",
//         author: "TATSUKI FUJIMOTO",
//         genre: "Shonen",
//         img: "https://i.imgur.com/g6zkUEd.jpeg",
//         description:
//           "Denji, a poor 16-year-old boy who makes a deal with a dog-like devil named Pochita and gains the ability to turn parts of his body into chainsaws.",
//       },
//       {
//         title: "Jujutsu Kaisen",
//         author: "Gege Akutami",
//         genre: "Shonen",
//         img: "https://i.imgur.com/3TtNDYV.jpeg",
//         description:
//           "Jujutsu Kaisen follows high schooler Yuji Itadori as he joins a secret organization to battle curses, malevolent spirits fueled by negative human emotions, in a quest to save humanity.",
//       },
//       {
//         title: "One Piece",
//         author: "Eiichiro Oda",
//         genre: "Shonen",
//         img: "https://i.imgur.com/S4Ah27V.jpeg",
//         description:
//           'The story follows the adventures of Monkey D. Luffy and his crew, the Straw Hat Pirates, where he explores the Grand Line in search of the mythical treasure known as the "One Piece" in order to become the next King of the Pirates.',
//       },
//       {
//         title: "Frieren: Beyond Journey's End",
//         author: "Kanehito Yamada",
//         genre: "Shonen",
//         img: "https://i.imgur.com/B26P2NL.jpeg",
//         description:
//           "Taking place in a fantasy world, the story follows Frieren, an elven mage, as she embarks on a journey to reach the resting place of souls in order to reunite with her former comrade Himmel, whose Hero Party once slew the Demon King.",
//       },
//     ]);
//     res.redirect("/");
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("internal Sever Error");
//   }
// });


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
router.get('/collection/add', (req, res) => {
  res.render('new.ejs')
})

// DELETE
// /collections/:id/remove

// UPDATE
router.put("/manga/:id", async (req, res)=>{
  try{
      const updatedManga = await Manga.findByIdAndUpdate(req.params.id, req.body,{ new: true})
      res.redirect(`/manga/${req.params.id}`);
  } catch (err){
   console.error(err)   
  }
})


// CREATE
router.post('/collection', async (req, res) => {
  try {
      const newManga = await Manga.create(req.body)
      res.redirect('/collection')
  } catch (err){
      console.error(err)
  }
})

// EDIT
router.get('/manga/:id/edit', async (req, res) => {
  try {
      const foundManga = await Manga.findById(req.params.id)
      res.render("edit.ejs", {
          manga: foundManga,
      })
  } catch (err){
      console.error(err)
  }
})

// SHOW
router.get("/manga/:id", async (req, res) => {
  const showManga = await Manga.findById(req.params.id);
  res.render("show.ejs", {
    manga: showManga,
  });
});

module.exports = router;
