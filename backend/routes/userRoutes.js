const express = require('express');

const router = express.Router();

const {getallUser, createUserAndSendEmail,DeleteUser, setStatus} = require('../controllers/userControllers');



router.route('/').get(getallUser);
router.route('/').post(createUserAndSendEmail);
router.route('/:id').delete(DeleteUser).put(setStatus);


module.exports = router;
