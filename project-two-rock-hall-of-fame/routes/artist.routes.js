const express = require('express');
const router = express.Router();

router.get('/new-artist', (req, res) => {
    res.render('create-artist')
})

router.get('/new-band', (req, res) => {
    res.render('create-band')
})

module.exports = router;