const express = require("express");
const router = express.Router();

router.get('/userProfile', (req, res) => {
    res.render('users/user-profile', {userInSession: req.session.currentUser})
})

module.exports = router;