const express = require("express");
const router = express.Router();
const {
  userLoggedIn,
  userLoggedOut,
} = require("../../middleware/route-guard.js");
const Band = require("../../models/Band.model");
const User = require("../../models/User.model");
const Artist = require("../../models/Artist.model");

router.get("/userProfile", userLoggedIn, async (req, res) => {
  res.render("users/user-profile", { userInSession: req.session.currentUser});
});

router.post("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) next(err);
    res.redirect("/");
  });
});

module.exports = router;
