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

router.post("/new-band", fileUploader.single("band-profile-picture"), (req, res, next) => {

  const { name, origin, members, year, genre } = req.body;
  console.log(members)
  
});

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

//Route search a band
router.get("/search/:bandName", (req, res) => {
  const { bandName } = req.query;
  Band.findOne({ name: bandName })
    .then((foundBand) => {
      res.redirect(`/bands/${foundBand._id}`);
    })
    .catch((err) => console.log(err));
});

//name.toLowerCase().includes(searchText.toLowerCase())

module.exports = router;
