const express = require("express");
const router = express.Router();
const Artist = require("../models/Artist.model");
const Band = require("../models/Band.model");
const Rating = require("../models/Rating.model");
const fileUploader = require("../config/cloudinary.config");
const { userLoggedIn, userLoggedOut } = require("../middleware/route-guard.js");

router.get("/new-artist", userLoggedIn, (req, res) => {
  res.render("create-artist");
});

//Route search an artist
router.get("/search", (req, res) => {
  const { artistName } = req.query;

  /*regex is the pattern. RegExp() is a constructor reserved to J that 
  searchs for a string pattern, that pattern is represented as the first 
  argument. The second argument "i" is also called a flag, 
  there are different flags to be used. In this case the "i" flag is used to  */
  const regex = new RegExp(artistName, "i");

  /*$regex is a method from Mongo DB to look for matches */
  Artist.find({ name: { $regex: regex } })
    .then((allTheArtistsFromDB) => {
      res.render("artists-results.hbs", { artists: allTheArtistsFromDB });
    })
    .catch((err) => console.log(err));
});

// Route List of artists
router.get("/", (req, res, next) => {
  Artist.find()
    .then((allTheArtistsFromDB) => {
      const orderedArtistsList = allTheArtistsFromDB.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      console.log("Retrieved artists from DB:", allTheArtistsFromDB);
      res.render("artists.hbs", { artists: orderedArtistsList });
    })

    .catch((error) => {
      console.log("Error while getting the bands from the DB: ", error);
      next(error);
    });
});

router.get("/:artistID", async (req, res) => {
  const { artistID } = req.params;
  let userRating;
  if (req.session.currentUser) {
    const userID = req.session.currentUser._id;
    userRating = await Rating.find({ userID: userID }).find({
      objectID: artistID,
    });
  } else userRating = "";

  Artist.findById(artistID)
    .populate("bands")
    .then((foundArtist) => {
      res.render("artist-details", { artist: foundArtist, userRating });
    });
});

router.post(
  "/new-artist",
  fileUploader.single("artist-profile-picture"),
  async (req, res) => {
    const { name, origin, birthday, deathDate, instrument, genre, occupation } =
      req.body;
    console.log(req.body);
    let artistImage;

    if (!name) {
      res.render("create-artist", {
        noNameMessage: `Please include artist's name`,
      });
    }

    if (!origin || !birthday) {
      res.render("create-artist", {
        missingFieldErr: "Please complete all required fields",
      });
    }

    if (!req.file) {
      artistImage =
        "https://res.cloudinary.com/djwmauhbh/image/upload/v1671036983/rock-page-images/BlankArtist_w2b1hr.webp";
    } else {
      artistImage = req.file.path;
    }

    Artist.create({
      name,
      origin,
      birthday,
      deathDate,
      instrument,
      genre,
      occupation,
      imageUrl: artistImage,
    })
      .then(() => res.redirect("/artists"))
      .catch((err) => {
        console.log(err);
      });
  }
);

//rate artist

router.post("/:artistID/rating", userLoggedIn, async (req, res, next) => {
  const { artistID } = req.params;
  const { artistRating } = req.body;
  const userID = req.session.currentUser._id;
  let ratingDoc = await Rating.find({ userID: userID }).find({
    objectID: artistID,
  });

  if (ratingDoc.length === 0) {
    Rating.create({
      userID: userID,
      objectID: artistID,
      ratingModel: "Artist",
      rating: artistRating,
    })
      .then(() => res.redirect(`/artists/${artistID}`))
      .catch((err) => console.log(err));
  } else {
    return Rating.findByIdAndUpdate(
      ratingDoc[0]._id,
      { rating: artistRating },
      { new: true }
    )
      .then(() => res.redirect(`/artists/${artistID}`))
      .catch((err) => {
        console.log(err);
      });
  }
});

//edit artist

router.get("/:id/edit", userLoggedIn, (req, res) => {
  const { id } = req.params;
  Artist.findById(id).then((foundArtist) => {
    res.render("edit-artist", { artist: foundArtist });
  });
});

router.post(
  "/:id",
  fileUploader.single("artist-profile-picture"),
  (req, res) => {
    const { id } = req.params;
    const { name, origin, birthday, deathDate, genre, originalPicture } =
      req.body;
    let image = req.file;
    let updatedImage = "";
    if (image === undefined) {
      updatedImage = originalPicture;
    } else {
      updatedImage = req.file.path;
    }
    Artist.findByIdAndUpdate(id, {
      name,
      origin,
      birthday,
      deathDate,
      genre,
      imageUrl: updatedImage,
    })
      .then((updatedArtist) => res.redirect(`/artists/${updatedArtist._id}`))
      .catch((err) => console.log(err));
  }
);

//Delete artist

router.post("/:artistId/delete", userLoggedIn, (req, res) => {
  const { artistId } = req.params;
  Artist.findByIdAndDelete(artistId)
    .then(() => res.redirect("/artists"))
    .catch((error) => next(error));
});

module.exports = router;
