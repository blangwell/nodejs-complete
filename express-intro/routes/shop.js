const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  // using path.join works on linux, mac, and windows
  // build a path that goes routes folder => back one => views => shop
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;