const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// urlencoded() function calls next() automatically
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// router object is a valid callback
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// app.use so it will work on all types of requests
app.use((req, res, next) => {
  // we use path.join() so our code will work on different OS
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000);

// next(); // must call next() to proceed to next middleware
// if sending a response, don't call next