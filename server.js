//Amit Maor 315406710
//May Gabay 322621590
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const aboutRouter = require('./routes/about');
const addcostRouter = require('./routes/addcost');
const reportRouter = require('./routes/report');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
console.log('mongoose module is available');
const crypto = require('crypto');
try{

    const connectionParams={
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }

app.use(express.json());
    mongoose.connect('mongodb+srv://maor:pass@cluster0.kq68toy.mongodb.net/mongodb?retryWrites=true&w=majority'
        ,connectionParams);
    const db = mongoose.connection;
    db.on('error', () => {console.log('error connect to the server- please check your internet connection')});
    db.once('open', () => {
        console.log('connected to the ATLAS data base!');
    });

app.set('views', path.join(__dirname, 'views'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/addcost', addcostRouter);
app.use('/report', reportRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
