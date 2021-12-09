require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const flash = require('express-flash');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const penyakitRouter = require('./src/routes/penyakit');
const gejalaRouter = require('./src/routes/gejala');
const listGejalaRouter = require('./src/routes/listGejala');
const analisaRouter = require('./src/routes/analisa');
const dashboardRouter = require('./src/routes/dashboard');
const loginRouter = require('./src/routes/login');
const middleware = require('./src/helper/middleware');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cookieParser('secret'));
app.use(
  session({
    cookie: { maxAge: 6000000 },
    store: new session.MemoryStore(),
    saveUninitialized: true,
    resave: 'true',
    secret: 'secret',
  })
);
app.use(flash());
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');
app.set('layout', './layouts/index');

app.use('/login', loginRouter);
app.use('/dashboard', middleware, dashboardRouter);
app.use('/penyakit', middleware, penyakitRouter);
app.use('/gejala', middleware, gejalaRouter);
app.use('/list', middleware, listGejalaRouter);
app.use('/analisa', middleware, analisaRouter);

app.use('*', middleware, (req, res) => res.redirect('/dashboard'));

app.listen(PORT, () => console.info(`Server Running on : http://localhost:${PORT}`));
