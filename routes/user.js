const express = require('express');
const router = express.Router();

const userController = require('../controller/user');

router.post('/hospitalRate', userController.hospitalRate);
router.post('/doctorRate', userController.doctorRate);

module.exports = router;
