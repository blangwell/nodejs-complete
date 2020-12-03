const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// urlencoded() function calls next() automatically
app.use(bodyParser.urlencoded({extended: false}));

// router object is a valid callback
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// use so it will work on all types of requests
app.use((req, res, next) => {
  res.status(404).send('<h1>404 ERR-OR!</h1>')
})

app.listen(3000);

// next(); // must call next() to proceed to next middleware
// if sending a response, don't call next