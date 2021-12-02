const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getOfertas)
router.post('/', controller.addOferta)

module.exports = router;