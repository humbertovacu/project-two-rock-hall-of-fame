const express = require("express");
const router = express.Router();
const Artist = require("../models/Artist.model");
const Band = require("../models/Band.model");
const Rating = require("../models/Rating.model");
const fileUploader = require('../config/cloudinary.config');

router.get("/new-artist", (req, res) => {
  res.render("create-artist");
});

router.get("/", (req, res) => {
    Artist.find()
    .then(artists => res.render("artists", {artists}))
    .catch(err => res.send(err))
  ;
});

router.get("/:artistID", async (req, res) => {
  const { artistID } = req.params;
    if(req.session.currentUser){
      const { userID } = req.session.currentUser._id;
      let artistRating = await Rating.find({userId: userID, objectID: artistID})
    } else artistRating = "";
    
    Artist.findById(artistID).populate('bands')
    .then(foundArtist => {
      console.log(`artist rating:${artistRating}`)
      res.render('artist-details', {artist: foundArtist, artistRating})})
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

router.post('/:artistID/rating', async (req, res, next)=> {
  const { artistID } = req.params;
  const { artistRating } = req.body;
  const userID = req.session.currentUser._id;
  console.log(`userID: ${userID}`)
  console.log(req.body)
  
  Rating.create({userID: userID, objectID: artistID, ratingModel: 'Artist', rating: artistRating})
  .then((createdRating) => {
    res.redirect(`/artists/${artistID}`)})
  .catch(err => {
    if(err.code === 11000){
      Rating.findOneAndUpdate({userID: userID, objectID: artistID}, {rating: artistRating}, {new: true})
      .then(updatedRating => res.redirect(`/artists/${artistID}`))
    } else (console.log(err))
  })
  
});


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
