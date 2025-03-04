const Store = require('../models/store');

exports.registerStore = (req, res) => {
    const { storeName, storeAddress, storeLatitude, storeLongitude, storeEmail, storephone, storePassword } = req.body;

    Store.createStore({
      storeName,
      storeAddress,
      storeLatitude,
      storeLongitude,
      storeEmail,
      storephone,
      storePassword,
    }, (err, store) => {
        if (err) {
            res.status(500).Json({ message: 'Registration Failed' });
        }
        else {
            res.status(200).Json({ message: "Registered Successfully",store});
        }
    });
}
exports.loginStore = (req, res) => {
    const { storeEmail, storePassword } = req.body;

    Store.getStore({
        storeEmail,
        storePassword,
    }, (err, store) => {
        if (err) {
            res.status(500).Json({ message: 'Login Failed' });
        }
        else if(store){
            res.status(200).Json({ message: "Login Successfully",store});
        }
        else {
            res.status(401).Json({ message: "Invalid Credentials" });
        }
    });
}

