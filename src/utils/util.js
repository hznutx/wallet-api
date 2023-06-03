const pool = require("./db");

const dbQuery = (sql) => {
  return new Promise((resolve, reject) => {
    pool.getConnection()
      .then((connection) => {
        connection.query(sql)
          .then((result) => {
            resolve(result);
          })
          .catch((err) => {
            reject(err);
          })
          .finally(() => {
            connection.release();
          });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = { dbQuery };
