const { Console } = require('console');
var express = require('express');
const wake = require('../wol');
var router = express.Router();

/* GET home page. */
router.post('/wake', function(req, res, next) {
  var info = req.body;
  wake(info.br_addr, info.mac_addr);

  res.status(200).end();
});

module.exports = router;
