let mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "Clj051071!@#",
  database: "library_demo",
  insecureAuth: true,
});

connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log(`Connected to database!`);
  }
});

module.exports = connection;
