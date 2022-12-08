const express = require("express");
const router = express.Router();
const Artist = require("../models/Artist.model");
const Band = require("../models/Band.model");
const fileUploader = require('../config/cloudinary.config')

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
    .then(foundArtist => res.render('artist-details', {artist: foundArtist}))
})

router.get("/new-band", (req, res) => {
  res.render("create-band");
});

router.post("/new-artist", fileUploader.single('artist-profile-picture'), async (req, res, next) => {
  const {
    name,
    origin,
    birthday,
    deathDate,
    bands,
    instrument,
    genre,
    occupation,
  } = req.body;

  let bandsDB = await Band.find();

  Artist.create({
    name,
    origin,
    birthday,
    deathDate,
    instrument,
    genre,
    occupation,
    imageUrl: req.file.path 
  })
  //   .then((newArtist) => {
  //     if(newArtist.bands==""){next()}
  //     else{
  //       let newArtistBands = newArtist.bands
  //       newArtistBands.forEach(band => {
  //         if(!bandsDB.includes(band)){
  //           Band.create({ name: band })
  //         }
  //       })
  //     }
  // })
    .then(() => res.redirect("/"))
    .catch((err) => {console.log(err)})
});

module.exports = router;
