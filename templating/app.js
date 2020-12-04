const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


// handlebars is not built in so we have to set engine
// app.engine('hbs', expressHbs({
//   layoutsDir: 'views/layouts/', 
//   defaultLayout: 'main-layout',
//   extname: 'hbs' // explicitly define extension if not handlebars
// }));

// pug autoregistered w/ express so we don't need require()
// app.set('view engine', 'pug');
// app.set('views', 'views'); // views set to default automatically

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

// catch all middleware
app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000);
