var express = require('express');
var router = express.Router();
var assert = require('assert');


var multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, '/Users/ccalderon/TS_DMP')
    },
    filename: (req, file, callback) => {
      callback(null, file.fieldname + '-' + Date.now())
    }
});
var upload = multer({storage: storage});

router.post('/fileUpload', upload.any(), (req, res, next) => {
    console.log(req.files);
    res.json({'message': 'File uploaded successfully'});
});

module.exports = router;