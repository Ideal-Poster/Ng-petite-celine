const express = require('express');
const router = express.Router();

/* POST emailSub listing. */
router.post('/', (req, res, next) => {
    res.send('Thank You');
    console.log('Response!');
});

module.exports = router;