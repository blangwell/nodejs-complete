const bodyParser = require('body-parser')

const express = require('express');

const adminRoute = require('./routes/admin');
const formRoute = require('./routes/form');

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoute);
app.use(formRoute.routes);

app.listen(3000);