const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('index');
});

router.get('/enciclopedia', (req, res) =>{
    res.render('enciclopedia');
});
module.exports = router;