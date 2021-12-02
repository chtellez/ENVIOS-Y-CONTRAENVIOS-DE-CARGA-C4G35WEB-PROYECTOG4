const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getSolicitudes)
router.post('/', controller.addSolicitud)
router.delete('/', controller.deleteSolicitud)
module.exports = router;