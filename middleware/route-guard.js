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

// const objectIsBand = (req, res, next) => {
//   const { objectID } = req.params;
//   const findBand = Band.findById(objectID);
//   if(findBand){
//     return res.redirect(`/bands/${objectID}`)
//   }
//   next();
// };

module.exports = {
  userLoggedIn,
  userLoggedOut,
};
