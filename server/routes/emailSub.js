const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
  var request = require("request");

  var options = { method: 'POST',
    url: 'https://petiteceline.us17.list-manage.com/subscribe/post',
    qs: { u: '4c131a3932ca2dd768c590f9b', 'amp;id': 'c760b1311e' },
    headers:
     { 'Postman-Token': '77655193-3f8f-4032-9ab6-9231c22f20c5',
       'Cache-Control': 'no-cache',
       Authorization: 'Basic UGV0aXRlIENlbGluZTo5NGU1YzM2MzIxNmZiMTU3ZWZjZDgzNzk0ODcwZmE1YS11czE3',
       'Content-Type': 'application/x-www-form-urlencoded',
       'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
    formData: { NAME: 'hellokitty', EMAIL: 'malcolmgourdine@gmail.com' } };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });


  res.status(201).json({
    message: 'Post added successfully'
  });
});
module.exports = router;
