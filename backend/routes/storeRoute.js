const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

router.post('/registerStore', storeController.registerStore);
router.post('/loginStore', storeController.loginStore);
module.exports = router;