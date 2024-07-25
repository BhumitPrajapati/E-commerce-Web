const express = require('express');
const sql = require('mssql');

var config = {
    "server": "Bhumit/SQLEXPRESS",
    "database": "SIS",
    "user": "sa",
    "password": "sa",
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