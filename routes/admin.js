const express = require('express');
const router = express.Router();

const adminController = require('../controller/admin');

router.post('/newUser', adminController.newUser);
router.post('/newHospital', adminController.newHospital);
router.post('/newDoctor', adminController.newDoctor);
router.post('/newLab', adminController.newLab);

module.exports = router;
