const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const configUploader = require('./routes/configUploader');

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain);

app.use('/configUploader', configUploader);

var server = app.listen(process.env.PORT || '3001', function () {
  console.log('Server listening on port ' + (process.env.PORT || '3001'));
});
