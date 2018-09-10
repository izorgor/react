const express = require('express'),
      fs      = require('fs'),
      s3      = require('s3'),
      path    = require('path'),
      router  = express.Router();

router.post('/', (req, res) => {

  fs.writeFile('./temp/test.json', JSON.stringify(req.body.configData), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });



});



module.exports = router;