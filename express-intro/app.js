const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
  console.log('This always runs!');
  next();
})

// think of middleware like a funnel 
app.use('/add-product', (req, res, next) => {
  console.log('in the middleware!');
  res.send('<h1>Hewwo fwum Add Pwoduct!</h1>')
  // next(); // must call next() to proceed to next middleware
  // if sending a response, don't call next
});

app.use('/', (req, res, next) => {
  console.log('in yet another middleware!');
  res.send('<h1>hewwo fwum expwess</h1>');
});

app.listen(3000);