const express = require('express');

const app = express();

// STEP 2 MIDDLEWARE
// app.use('/', (req, res, next) => {
//   console.log('in de middlware');
//   next();
// });
// app.use('/', (req, res, next) => {
//   res.send('<h1>The Second Middleware Hit</h1>')
// })

// STEP 3 MIDDLEWARE
app.use('/users', (req, res) => {
  res.send('<h1>Arrrgggg This Be Tha User Page</h1>')
});

app.use('/', (req, res) => {
  res.send('<h1>Da Home Route</h1>')
});

app.listen(3000);