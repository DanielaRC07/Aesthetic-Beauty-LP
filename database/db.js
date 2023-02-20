const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "daniela",
  password: "secret",
  database: "lp",
  port: 3307
});

connection.connect((error) => {
  if (error) {
    console.log("el error en bd" + error);
  }
  console.log("Conexion con bd es exitosa");
});
module.exports = connection;
