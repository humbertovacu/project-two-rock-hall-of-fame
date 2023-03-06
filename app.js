require("dotenv").config();

require("./db");

const express = require("express");

const hbs = require("hbs");

const app = express();
app.use(express.static("public"));

require("./config")(app);
require("./config/session.config")(app);


const capitalize = require("./utils/capitalize");
const projectName = "project-two-rock-hall-of-fame";
const { userObject } = require("./middleware/route-guard.js");
const Artist = require("./models/Artist.model");
const Band = require("./models/Band.model");
const Survey = require("./models/Survey.model");


app.use(userObject);

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const artistRoutes = require("./routes/artist.routes");
app.use("/artists", artistRoutes);

const bandRoutes = require("./routes/band.routes");
app.use("/bands", bandRoutes);

const loginRoutes = require("./routes/login.routes");
app.use("/login", loginRoutes);

const signupRoutes = require("./routes/signup.routes");
app.use("/sign-up", signupRoutes);

const authRoutes = require("./routes/auth/auth.routes");
app.use("/auth", authRoutes);


require("./error-handling")(app);

module.exports = app;
