const app = require("../app");
const Band = require("../models/Band.model");

const userLoggedIn = (req, res, next) => {
  if (!req.session.currentUser) {
    return res.redirect("/login");
  }
  next();
};

const userLoggedOut = (req, res, next) => {
  if (req.session.currentUser) {
    return res.redirect("/");
  }
  next();
};

const userObject = (req, res, next) => {
  if (req.session.currentUser){
    res.locals.userLogged = req.session.currentUser
  }
  next();
}

module.exports = {
  userLoggedIn,
  userLoggedOut,
  userObject,
};
