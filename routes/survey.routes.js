const express = require("express");
const router = express.Router();
const Survey = require("../models/Survey.model");
const { userLoggedIn, userLoggedOut } = require("../middleware/route-guard.js");

router.get("/", userLoggedIn, (req, res) => {
  res.render("surveys");
});

// Routes Create a survey
router.get("/create", (req, res) => {
  res.render("create-survey");
});

router.post("/create", (req, res, next) => {
  const { question, option } = req.body;

  const optionsArray = option.split(",");

  console.log(optionsArray);

  Survey.create({
    question,
    optionsArray,
  })
    .then(() => {
      res.redirect("/surveys");
    })
    .catch((error) => next(error));
});

// Route List of surveys
router.get("/", (req, res, next) => {
  Survey.find()
    .then((allTheSurveysFromDB) => {
      const orderedSurveysList = allTheSurveysFromDB.sort((a, b) =>
        a.question.localeCompare(b.question)
      );

      console.log("Retrieved surveys from DB:", allTheSurveysFromDB);
      res.render("surveys.hbs", { surveys: orderedSurveysList });
    })

    .catch((error) => {
      console.log("Error while getting the bands from the DB: ", error);
      next(error);
    });
});

module.exports = router;
