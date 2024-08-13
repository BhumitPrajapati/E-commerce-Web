const express = require('express');
const sql = require('mssql');
require('dotenv').config();

var config = {
    "server": process.env.DB_SERVER,
    "database": process.env.DB_NAME,
    "user": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "options": {
        "trustedconnection": true,
        "enableArithAbort": true,
        "trustServerCertificate": true, 
    },
    // "port": 1433,
    // "connectionTimeout": 30000,
};
// console.log(config);
const connection = new sql.ConnectionPool(config);


module.exports = { sql, connection };