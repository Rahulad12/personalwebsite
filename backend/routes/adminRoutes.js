const express = require('express');
const router = express.Router();


const {Login,createAdmin} = require('../controllers/AdminControllers');

router.route('/login').post(Login);
router.route('/create').post(createAdmin);

module.exports = router;