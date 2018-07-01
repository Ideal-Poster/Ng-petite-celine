const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
  var request = require("request");

  var options = { method: 'POST',
    url: 'https://us17.api.mailchimp.com/3.0/lists/c760b1311e/members',
    headers:
     { 'Postman-Token': '984ef5a9-c8b5-47d6-9968-8cd28304f1d6',
       'Cache-Control': 'no-cache',
       Authorization: 'Basic YW55c3RyaW5nOjk0ZTVjMzYzMjE2ZmIxNTdlZmNkODM3OTQ4NzBmYTVhLXVzMTc=',
       'Content-Type': 'application/json' },
    body:
     { email_address: req.body.email,
       status: 'subscribed',
       merge_fields: { FNAME: req.body.name } },
    json: true };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });




  res.status(201).json({
    message: 'Post added successfully'
  });
});
module.exports = router;
