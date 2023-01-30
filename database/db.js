const mysql      = require('mysql');
module.exports = connection;
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'daniela',
  password : 'secret',
  database : 'lp'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

connection.end();