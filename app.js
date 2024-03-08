var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
const flash = require('connect-flash');
var cors = require('cors');
var expressValidator = require('express-validator');

const adminapi = require('./routes/adminapi');

var app = express();

app.use(cors());

app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    next()
});

var configdata = require('./config');
app.set('port', configdata.runningPort);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(flash());
app.use(expressValidator());

app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));


app.use(flash());
app.use('/adminapi', adminapi);

var connection = require('./db');

app.use(function (req, res, next) {
    req.header("Content-Type", "application/json");
    next();
});

app.listen(app.get('port'));
console.log('Server Runnign on port localhost:' + app.get('port'));

module.exports = app;
