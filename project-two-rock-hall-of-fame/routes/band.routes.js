const express = require("express");
const router = express.Router();
// const app = express();

router.get("/new-band", (req, res) => {
  res.render("create-band");
});

// app.get("/bands", (req, res) => {
//   res.render("bands");
// });

module.exports = router;
// module.exports = app;
