const db = require("../config/database");
const bcrypt = require("bcrypt");

class Store {
  static createStore(storeData, callback) {
    const {
      storeName,
      storeEmail,
      storePhone,
      storeAddress,
      storeLatitude,
      storeLongitude,
      storePassword,
    } = storeData;

    bcrypt.hash(storePassword, 10, (err, hash) => {
      if (err) {
        callback(err, null);
      } else {
        const insertStoreQuery =
          "INSERT INTO `stores`(store_name,store_address,store_latitude,store_longitude,store_phone,store_email,store_password) VALUES (?,?,?,?,?,?,?)";
        db.query(
          insertStoreQuery,
          [
            storeName,
            storeAddress,
            storeLatitude,
            storeLongitude,
            storePhone,
            storeEmail,
            hash,
          ],
          (err, result) => {
            if (err) {
              callback(err, null);
            } else {
              callback(null, result);
            }
          }
        );
      }
    });
  }

  static getStore(email, password, callback) {
    const getStoreQuery = "SELECT * FROM `stores` WHERE ?";
    db.query(getStoreQuery, [email], (err, result) => {
      if (err) {
        callback(err, null);
      } else if (results.length > 0) {
        const store = results[0];
        bcrypt.compare(password, store.store_password, (err, result) => {
          if (result) {
            callback(null, store);
          } else {
            callback(null, null);
          }
        });
      } else {
        callback(null, null);
      }
    });
  }
}

module.exports = Store;
