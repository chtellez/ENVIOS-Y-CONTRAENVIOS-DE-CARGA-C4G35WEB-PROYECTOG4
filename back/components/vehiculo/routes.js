const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getVehiculos)
router.post('/', controller.addVehiculo)

module.exports = router;