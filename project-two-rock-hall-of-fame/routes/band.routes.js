const express = require("express");
const router = express.Router();

router.get("/new-band", (req, res) => {
  res.render("create-band");
});

router.get("/", (req, res) => {
  res.render("bands");
});

module.exports = router;
