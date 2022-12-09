const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const saltRounds = 10;
const User = require("../models/User.model");

router.get("/", (req, res) => {
  res.render("auth/sign-up");
});

/* POST Signup page */

// router.post("/signup", async (req, res, next) => {
//   const { username, email, password } = req.body;

//   const passwordHash = await bcrypt.hash(password, saltRounds);

//   User.create({ username, email, passwordHash })
//     .then((newUser) => res.redirect(`/auth/user-profile/${newUser.username}`))
//     .catch((err) => console.log(err));
// });

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
      res.redirect("/userProfile");
    })
    .catch((error) => next(error));
});

/*Get profile page*/
router.get("/user-profile/:username", (req, res, next) => {
  const { username } = req.params;

  User.findOne({ username })
    .then((foundUser) =>
      res.render("auth/user-profile/${username}", { user: foundUser })
    )
    .catch((err) => console.log(err));
});

module.exports = router;
