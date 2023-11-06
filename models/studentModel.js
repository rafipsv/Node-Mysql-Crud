const dbConnection = require("../utils/mySqlConnection");

module.exports = class Student {
  constructor(name, email, mobile) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
  }

  save(cb) {
    dbConnection.connect((error) => {
      if (error) console.log(error);
      let sql =
        "INSERT INTO students(name, email, mobile) VALUES('" +
        this.name +
        "', '" +
        this.email +
        "', '" +
        this.mobile +
        "')";
      dbConnection.query(sql, (error, result) => {
        if (error) console.log(error);
        cb(this, result.insertId);
      });
    });
  }

  static getAllStudent(cb) {
    dbConnection.connect((error) => {
      if (error) console.log(error);
      let sql = "select * from students";
      dbConnection.query(sql, (error, result) => {
        if (error) console.log(error);
        cb(result);
      });
    });
  }
  static getOneStudent(id, cb) {
    dbConnection.connect((error) => {
      if (error) console.log(error);
      let sql = "SELECT * FROM students WHERE id = '" + id + "'";
      dbConnection.query(sql, (error, result) => {
        if (error) console.log(error);
        cb(result);
      });
    });
  }

  static deleteStudent(id, cb) {
    dbConnection.connect((error) => {
      if (error) console.log(error);
      let sql = "DELETE FROM students WHERE id='" + id + "'";
      dbConnection.query(sql, (error, result) => {
        if (error) console.log(error);
        cb();
      });
    });
  }
  updateStudent(id, cb) {
    dbConnection.connect((error) => {
      if (error) console.log(error);
      let sql =
        "UPDATE students SET name = '" +
        this.name +
        "', email = '" +
        this.email +
        "', mobile = '" +
        this.mobile +
        "' WHERE id = '" +
        id +
        "'";
      dbConnection.query(sql, (error, result) => {
        if (error) console.log(error);
        cb(this);
      });
    });
  }
};
