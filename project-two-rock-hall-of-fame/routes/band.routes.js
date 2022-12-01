const express = require("express");
const Band = require("../models/Band.model");
const router = express.Router();

router.get("/new-band", (req, res) => {
  res.render("create-band");
});

router.get("/", (req, res, next) => {
  Band.find()
    .then((allTheBandsFromDB) => {
      console.log("Retrieved bands from DB:", allTheBandsFromDB);
      // we call the render method after we obtain the bands data from the database -> allTheBandsFromDB
      res.render("bands.hbs", { bands: allTheBandsFromDB }); // pass `allTheBandsFromDB` to the view (as a variable bands to be used in the HBS)
    })

    .catch((error) => {
      console.log("Error while getting the bands from the DB: ", error);
      // Call the error-middleware to display the error page to the user
      next(error);
    });
});

module.exports = router;
