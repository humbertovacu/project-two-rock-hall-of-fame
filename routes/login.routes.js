const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const bcryptjs = require("bcryptjs");
const saltRounds = 10;
const { userLoggedIn, userLoggedOut } = require("../middleware/route-guard.js");

router.get("/", userLoggedOut, (req, res) => {
  res.render("auth/login");
});

router.post("/", (req, res, next) => {

  const { email, password } = req.body;

  if (email === "" || password === "") {
    res.render("auth/login", {
      errorMessage: "Please enter both, email and password to login.",
    });
    return;
  }

  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        res.render("auth/login", {
          errorMessage: "Email is not registered. Try with other email.",
        });
        return;
      } else if (bcryptjs.compareSync(password, user.passwordHash)) {
        req.session.currentUser = user;
        res.redirect("/auth/userProfile");
      } else {
        res.render("auth/login", { errorMessage: "Incorrect password." });
      }
    })
    .catch((error) => next(error));
});

module.exports = router;
