const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hospital_bayer'
})

connection.connect(function(err){
    if(!!err){
        console.log(err)
    }
    else{
        console.log('Connected');
    }
})

module.exports = connection
