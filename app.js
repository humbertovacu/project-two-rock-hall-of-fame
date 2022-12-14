// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();
app.use(express.static("public"));

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);
require("./config/session.config")(app);

// default value for title local
const capitalize = require("./utils/capitalize");
const projectName = "project-two-rock-hall-of-fame";
const { userObject } = require("./middleware/route-guard.js");
const Artist = require("./models/Artist.model");
const Band = require("./models/Band.model");
const Survey = require("./models/Survey.model");

// app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

// 👇 Start handling routes here

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



// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
