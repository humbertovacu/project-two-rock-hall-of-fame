const express = require("express");
const Artist = require("../models/Artist.model");
const Band = require("../models/Band.model");
const router = express.Router();
const fileUploader = require('../config/cloudinary.config')

router.get("/new-band", (req, res) => {
  res.render("create-band");
});



// Route List of bands
router.get("/", (req, res, next) => {
  Band.find()
    .then((allTheBandsFromDB) => {
      console.log("Retrieved bands from DB:", allTheBandsFromDB);
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

module.exports = router;
