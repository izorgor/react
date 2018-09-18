const express = require('express'),
      fs      = require('fs'),
      s3      = require('s3'),
      router  = express.Router();

router.post('/', (req, res) => {

  fs.writeFile('./temp/test.json', JSON.stringify(req.body.configData), function (err) {
    if (err) throw err;
    console.log('Saved!');
    res.send("done!")
  });



});

module.exports = router;