const express = require('express');
const {calculateTime} = require("../t06_quantum/quantum");
const router = express.Router();
const quantumTime = calculateTime();

router.get('/', (req, res) => {
    res.render('quantum', { quantumTime });
});

module.exports = router;
