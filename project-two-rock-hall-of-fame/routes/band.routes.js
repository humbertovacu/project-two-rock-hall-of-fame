const express = require("express");
const Artist = require("../models/Artist.model");
const Band = require("../models/Band.model");
const router = express.Router();
const fileUploader = require("../config/cloudinary.config");

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

router.post("/new-band", fileUploader.single("band-profile-picture"), async (req, res, next) => {
     const { name, origin, year, genre, membersArray } = req.body;
     console.log(req.body)
     let membersArrayOrdered = membersArray[0].split(',')
     console.log(membersArrayOrdered)
     Band.create({name, origin, year, genre, members: membersArrayOrdered, imageUrl: req.file.path })
      .then(newBand => {res.redirect(`/bands/${newBand._id}`)})
      .catch((err) => console.log(err));
  }
);

// edit band route shows form
router.get("/:id/edit", async (req, res, next) => {
  const { id } = req.params;
  Band.findById(id)
    .then((band) => {
      res.render("edit-band", { band });
    })
    .catch((err) => res.send(err));
});

// edit band route sends information form
router.post("/:id", fileUploader.single("band-profile-picture"), async (req, res, next) => {
    const { name, origin, year, members, genre } = req.body;
    const { id } = req.params;
    Band.findByIdAndUpdate(
      id,
      {
        name,
        imageUrl: req.file.path,
        origin,
        year,
        // members,
        genre,
      },
      { new: true }
    )
      .then((updatedBand) => res.redirect(`/bands/${updatedBand._id}`))
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
router.get("/", (req, res, next) => {
  Band.find()
    .then((allTheBandsFromDB) => {
      // console.log("Retrieved bands from DB:", allTheBandsFromDB);
      res.render("bands.hbs", { bands: allTheBandsFromDB });
    })

    .catch((error) => {
      console.log("Error while getting the bands from the DB: ", error);
      next(error);
    });
});

// Route band details
router.get("/:bandId", (req, res) => {
  const { bandId } = req.params;
  Band.findById(bandId)
    .then((bandFound) => {
      console.log("bandFound", bandFound);
      res.render("band-details.hbs", { singleBand: bandFound });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
