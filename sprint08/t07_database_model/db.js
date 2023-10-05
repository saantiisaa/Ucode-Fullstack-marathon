const mysql = require("mysql2")
const fs = require('fs');
const configRead = fs.readFileSync('config.json');
const config = JSON.parse(configRead);

const connection = mysql.createConnection(config);

module.exports = connection