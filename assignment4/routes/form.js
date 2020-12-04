const express = require('express');

const router = express.Router();

const users = [];

router.get('/', (req, res) => {
  res.render('form', {pageTitle: 'Add a User'})
});

router.post('/add-user', (req, res) => {
  users.push({ name: req.body.name })
  console.log(users)
  res.redirect('admin/view-users')
})


exports.routes = router;
exports.users = users;