const express = require('express');
const router = express.Router();

router.get('/', async function(req, res, next) {
    res.render('index.njk', {
        title: 'Hjalmars sida för automatiserade funktioner'
    })
})

router.get('/mock', async function(req, res, next) {
    res.render('mock.njk', {
        title: "Hjalmars text konverter"
    })
})

router.post('/mock', async function (req, res, next) {
    const { inText } = req.body;
    console.log(inText);

    res.redirect('/mock');
})

module.exports = router;