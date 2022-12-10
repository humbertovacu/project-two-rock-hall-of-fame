const express = require("express");
const router = express.Router();
const Survey = require("../models/Survey.model");

router.get("/", (req, res) => {
  res.render("surveys");
});

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

module.exports = router;
