const connection = require("../config/connection");

class authModel {
  static login(email, password) {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM users WHERE email = '${email}' AND password ='${password}'`,
        (error, rows) => {
          if (error) {
            reject(error);
          } else {
            resolve(rows);
          }
        }
      );
    });
  } //function
} // class end

module.exports = authModel;
