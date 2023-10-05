const express = require('express');
const {calculateTime} = require("../t06_quantum/normal");
const router = express.Router();
const normalTime = calculateTime();

router.get('/', (req, res) => {
    res.render('normal', { normalTime });
});

module.exports = router;
