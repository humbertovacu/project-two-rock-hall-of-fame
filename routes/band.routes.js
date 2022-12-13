const express = require("express");
const Artist = require("../models/Artist.model");
const Band = require("../models/Band.model");
const Rating = require("../models/Rating.model");
const router = express.Router();
const fileUploader = require("../config/cloudinary.config");
const { default: mongoose } = require("mongoose");
const { userLoggedIn, userLoggedOut } = require("../middleware/route-guard.js");

router.get("/new-band", (req, res) => {
  Artist.find().then((allArtists) =>
    res.render("create-band", { artists: allArtists })
  );
});

//Route search a band
router.get("/search", (req, res) => {
  const { bandName } = req.query;

  /*regex is the pattern. RegExp() is a constructor reserved to J that 
  searchs for a string pattern, that pattern is represented as the first 
  argument. The second argument "i" is also called a flag, 
  there are different flags to be used. In this case the "i" flag is used to  */
  const regex = new RegExp(bandName, "i");

  /*$regex is a method from Mongo DB to look for matches */
  Band.find({ name: { $regex: regex } })
    .then((allTheBandsFromDB) => {
      res.render("band-results.hbs", { bands: allTheBandsFromDB });
    })
    .catch((err) => console.log(err));
});

router.post(
  "/new-band",
  fileUploader.single("band-profile-picture"),
  (req, res) => {
    const { name, origin, year, genre, membersArray } = req.body;
    if (!name || !origin || !year || !genre) {
      res.render("create-band", {
        emptyField: "Please complete all fields before submitting",
      });
      return;
    }
    if (!membersArray) {
      res.render("create-band", {
        noMembers: "Please add a band member before submitting",
      });
      return;
    }
    let membersArrayOrdered = membersArray[0].split(",");
    Band.create({
      name,
      origin,
      year,
      genre,
      members: membersArrayOrdered,
      imageUrl: req.file.path,
    })
      .then(async (newBand) => {
        for (const memberID of membersArrayOrdered) {
          await Artist.updateOne(
            { _id: memberID },
            { $addToSet: { bands: newBand._id } },
            { new: true }
          );
        }
      })
      .then(() => res.redirect("/bands"))
      .catch((err) => console.log(err));
  }
);

//rate band

router.post("/:bandID/rating", userLoggedIn, async (req, res, next) => {
  const { bandID } = req.params;
  const { bandRating } = req.body;
  const userID = req.session.currentUser._id;
  console.log(`userID: ${userID}`);
  console.log(req.body);

  Rating.create({
    userID: userID,
    objectID: bandID,
    ratingModel: "Band",
    rating: bandRating,
  })
    .then((createdRating) => {
      res.redirect(`/bands/${bandID}`);
    })
    .catch((err) => {
      if (err.code === 11000) {
        Rating.findOneAndUpdate(
          { userID: userID, objectID: bandID },
          { rating: bandRating },
          { new: true }
        ).then((updatedRating) => res.redirect(`/bands/${bandID}`));
      } else console.log(err);
    });
});

// edit band route shows form
router.get("/:id/edit", (req, res, next) => {
  const { id } = req.params;
  Band.findById(id)
    .populate("members")
    .then(async (band) => {
      const allArtists = await Artist.find();
      res.render("edit-band", { band, allArtists });
    })
    .catch((err) => res.send(err));
});

// edit band route sends information form
router.post(
  "/:id",
  fileUploader.single("band-profile-picture"),
  async (req, res, next) => {
    const {
      name,
      origin,
      year,
      originalMembers,
      genre,
      originalPicture,
      file,
    } = req.body;
    const { id } = req.params;
    let image = req.file;
    let updatedImage = "";
    if (image === undefined) {
      updatedImage = originalPicture;
    } else {
      updatedImage = req.file.path;
    }
    Band.findByIdAndUpdate(
      id,
      {
        name,
        imageUrl: updatedImage,
        origin,
        year,
        members: originalMembers,
        genre,
      },
      { new: true }
    )
      .then(async (updatedBand) => {
        const updatedBandMembers = updatedBand.members;
        for (const memberID of updatedBandMembers) {
          await Artist.updateOne(
            { _id: memberID },
            { $addToSet: { bands: updatedBand._id } },
            { new: true }
          );
        }
        res.redirect(`/bands/${updatedBand._id}`);
      })
      .catch((err) => res.send(err));
  }
);

// // POST route to delete a band from the database

router.post("/:bandId/delete", (req, res, next) => {
  const { bandId } = req.params;
  Band.findByIdAndDelete(bandId)
    .then(() => res.redirect("/bands"))
    .catch((error) => next(error));
});

// Route List of bands
router.get("/", userLoggedIn, (req, res, next) => {
  Band.find()
    .then((allTheBandsFromDB) => {
      const orderedBandList = allTheBandsFromDB.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      // console.log("Retrieved bands from DB:", allTheBandsFromDB);
      res.render("bands.hbs", { bands: orderedBandList });
    })

    .catch((error) => {
      console.log("Error while getting the bands from the DB: ", error);
      next(error);
    });
});

// Route band details
router.get("/:bandID", async (req, res) => {
  const { bandID } = req.params;
  let bandRating = "";
  if (req.session.currentUser) {
    const { userID } = req.session.currentUser._id;
    bandRating = await Rating.findOne({ userID: userID }).find({
      objectID: bandID,
    });
  }

  Band.findById(bandID)
    .populate("members")
    .then((bandFound) => {
      console.log(bandRating);
      res.render("band-details.hbs", { singleBand: bandFound, bandRating });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
