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
  // here the 4 validations:
  // validation 1:  check if we have all info
  if (!username || !email || !password) {
    res.render("auth/sign-up", {
      errorMessage: "please fill out all information",
    });
    return;
  }
  // validation 2: Check email format, with a regex
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegex.test(email)) {
    res.render("auth/sign-up", {
      errorMessage: "Please present a valid email",
    });
    return;
  }
  // validation 3: check password strength
  // validation 4: check if username is unique
  User.findOne({ username })
    .then((user) => {
      if (user) {
        res.render("auth/signup", {
          errorMessage: "that user is already registered",
        });
      } else {
        //encrypt password and create the user in the DB
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

/*Get profile page*/

// router.get("/userProfile", (req, res) => {
//   res.render("users/user-profile", { userInSession: req.session.currentUser });
// });

// router.post("/logout", (req, res, next) => {
//   req.session.destroy((err) => {
//     if (err) next(err);
//     res.redirect("/");
//   });
// });

module.exports = router;
