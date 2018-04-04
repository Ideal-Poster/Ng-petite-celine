var express = require('express');
var router = express.Router();

/* GET emailSub listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

/* POST emailSub listing. */
router.post('/', function(req, res, next) {
    res.send('Thank You');
    console.log('Response!');
});

module.exports = router;
