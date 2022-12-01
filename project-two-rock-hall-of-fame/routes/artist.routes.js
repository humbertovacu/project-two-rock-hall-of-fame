const express = require("express");
const router = express.Router();
const Artist = require("../models/Artist.model");
const Band = require("../models/Band.model");

router.get("/new-artist", (req, res) => {
  res.render("create-artist");
});

router.get("/", (req, res) => {
    Artist.find()
    .then(artists => res.render("artists", {artists}))
    .catch(err => res.send(err))
  ;
});

router.get("/:artistID", (req, res) => {
    const { artistID } = req.params;
    Artist.findById(artistID)
    .then(foundArtist => res.render('artist-details', {artist: foundArtist, formattedDate: { $dateToString: { format: "%Y-%m-%d %H:%M", date: "$birthday" } }}))
})

router.get("/new-band", (req, res) => {
  res.render("create-band");
});

router.post("/new-artist", async (req, res) => {
  const {
    name,
    profilePicture,
    origin,
    birthday,
    deathDate,
    bands,
    instruments,
    genre,
    occupation,
  } = req.body;
  let bandsDB = await Band.find();
  Artist.create({
    name,
    profilePicture,
    origin,
    birthday,
    deathDate,
    bands,
    instruments,
    genre,
    occupation,
  })
    .then((newArtist) => {
      let newArtistBands = newArtist.bands;
      newArtistBands.forEach((band) => {
        if (!bandsDB.includes(band)) {
          Band.create({ name: band });
        }
      });
    })
    .then(() => res.redirect("/"))
    .catch((err) => res.send(err));
});

module.exports = router;
