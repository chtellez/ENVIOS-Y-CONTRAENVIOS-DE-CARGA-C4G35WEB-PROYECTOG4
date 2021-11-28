const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/todos', controller.getVehiculos)
router.post('/agregar', controller.addVehiculo)

module.exports = router;