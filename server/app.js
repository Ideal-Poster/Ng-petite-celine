const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/emailSub", (req, res, next) => {
  // var request = require("request");
  // var options = { method: 'POST',
  //   url: '',
  //   qs: { u: '4c131a3932ca2dd768c590f9b', 'amp;id': 'c760b1311e' },
  //   headers:
  //    { 'Postman-Token': '227ad449-10fb-4d78-acc0-de5c000f408c',
  //      'Cache-Control': 'no-cache',
  //      'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
  //   formData: { NAME: req.body.name, EMAIL: req.body.email } };
  //   // https://petiteceline.us17.list-manage.com/subscribe/post
  // request( function (error, response, body) {
  //   if (error) throw new Error(error);

  //   console.log(body);
  // });
  // console.log(req.body.name);

  res.status(201).json({
    message: 'Post added successfully'
  });
});

module.exports = app;
