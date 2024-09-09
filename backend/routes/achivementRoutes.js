const express = require('express');
const router = express.Router();

const {getallAchivement, createAchivement, getCertification,createCertification} = require('../controllers/AchivementControllers');

router.route('/achievements').get(getallAchivement).post(createAchivement);
router.route('/certificate').get(getCertification).post(createCertification);

module.exports = router;