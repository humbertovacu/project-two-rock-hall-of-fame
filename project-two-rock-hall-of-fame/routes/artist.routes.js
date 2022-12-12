const express = require("express");
const router = express.Router();
const Artist = require("../models/Artist.model");
const Band = require("../models/Band.model");
const fileUploader = require('../config/cloudinary.config');
const Rating = require("../models/Rating.model");

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
    Artist.findById(artistID).populate('bands')
    .then(foundArtist => res.render('artist-details', {artist: foundArtist}))
})

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
    .then(() => res.redirect("/artists"))
    .catch((err) => {console.log(err)})
});

//rate artist

router.post('/:artistID/rating', (req, res)=> {
  const { artistID } = req.params;
  console.log(req.params)
  const { artistRating } = req.body;
  const userID = req.session.currentUser._id;
  console.log(req.body)
  console.log(userID)
  Rating.create({userVote: userID, objectID: artistID, ratingModel:'Artist', rating: artistRating})
  .then((ratedArtist)=>res.redirect(`/artists/${ratedArtist.objectID}`))
  .catch(err => console.log(err));

})

//edit artist

router.get('/:id/edit', (req, res) => {
  const { id } = req.params;
  Artist.findById(id)
  .then((foundArtist) => {
    res.render('edit-artist', {artist: foundArtist})
  })
  
})

router.post('/:id', fileUploader.single("artist-profile-picture"), (req, res) => {
  const { id } = req.params;
  const { name, origin, birthday, deathDate, genre, originalPicture } = req.body;
  let image = req.file;
    let updatedImage = "";
    if (image === undefined) {
      updatedImage = originalPicture;
    } else {
      updatedImage = req.file.path;
    }
  Artist.findByIdAndUpdate(id, {name, origin, birthday, deathDate, genre, imageUrl: updatedImage})
  .then(updatedArtist => res.redirect(`/artists/${updatedArtist._id}`))
  .catch(err => console.log(err));
})

//Delete artist

router.post("/:artistId/delete", (req, res) => {
  const { artistId } = req.params;
  Artist.findByIdAndDelete(artistId)
    .then(() => res.redirect("/artists"))
    .catch((error) => next(error));
});


module.exports = router;
