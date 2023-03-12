const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const saltRounds = 10;
const User = require("../models/User.model");
const { userLoggedIn, userLoggedOut } = require("../middleware/route-guard.js");


router.get("/", userLoggedOut, (req, res) => {
  res.render("auth/sign-up");
});


router.post("/", (req, res, next) => {

  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.render("auth/sign-up", {
      errorMessage: "please fill out all information",
    });
    return;
  }
  
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegex.test(email)) {
    res.render("auth/sign-up", {
      errorMessage: "Please present a valid email",
    });
    return};

  User.findOne({ username })
    .then((user) => {
      if (user) {
        res.render("auth/signup", {
          errorMessage: "that user is already registered",
        });
      } else {
        bcryptjs
          .genSalt(saltRounds)
          .then((salt) => bcryptjs.hash(password, salt))
          .then((hashedPassword) => {
            return User.create({
              username,
              email,
              passwordHash: hashedPassword,
            });
          })
          .then((userFromDB) => {
            req.session.currentUser = userFromDB;
            res.redirect("/auth/userProfile");
          })
          .catch((error) => next(error));
      }
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
