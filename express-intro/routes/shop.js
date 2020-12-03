const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('<h1>Welcome 2 Da Shop!</h1>');
});

module.exports = router;