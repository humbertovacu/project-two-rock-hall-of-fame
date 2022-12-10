const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const saltRounds = 10;
const User = require("../models/User.model");

/////////SIGNUP/////////
router.get("/", (req, res) => {
  res.render("auth/sign-up");
});

/* POST Signup page */
router.post("/", (req, res, next) => {
  console.log("The form data: ", req.body);

  const { username, email, password } = req.body;

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
      // console.log("Newly created user is: ", userFromDB);
      res.render("users/user-profile", userFromDB);
    })
    .catch((error) => next(error));
});

/////////LOGIN/////////
router.get("/login", (req, res) => res.render("auth/login"));

/*Get profile page*/
router.get("/user-profile/:username", (req, res, next) => {
  const { username } = req.params;

  User.findOne({ username })
    .then((foundUser) => res.render("users/user-profile", { user: foundUser }))
    .catch((err) => console.log(err));
});

module.exports = router;
