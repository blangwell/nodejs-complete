const express = require('express');

const router = express.Router();

const form = require('./form');

router.get('/view-users', (req, res) => {
  res.render('view-users', {pageTitle: 'View All Users', users: form.users});
})

module.exports = router;