var mysql=require('mysql');
var configdata = require('./config');

var pool=mysql.createPool({
    host:configdata.dbhost,
    port:configdata.dbport,
    user:configdata.dbusername,
    password:configdata.dbpassword,
    database:configdata.dbdatabasename,
    waitForConnections: true,
    connectionLimit: 25,
    queueLimit :0,
    wait_timeout : 28800,
    connectTimeout: 30000,
    rowsAsArray: false,
    enableKeepAlive: true,
    multipleStatements: true
});

module.exports=pool;