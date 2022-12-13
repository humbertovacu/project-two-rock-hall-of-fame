const express = require("express");
const router = express.Router();
const {
  userLoggedIn,
  userLoggedOut,
} = require("../../middleware/route-guard.js");

router.get("/userProfile", userLoggedIn, (req, res) => {
  res.render("users/user-profile", { userInSession: req.session.currentUser });
});

router.post("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) next(err);
    res.redirect("/");
  });
});

module.exports = router;
