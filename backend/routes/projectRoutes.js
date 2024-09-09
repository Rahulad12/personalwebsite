const express = require('express');

const router = express.Router();

const{getProjects,createProject,updateProject,deleteProject,getProjectById} = require('../controllers/projectControllers');

router.route('/').get(getProjects).post(createProject);
router.route('/:id').get(getProjectById).put(updateProject);
router.route('/:id').delete(deleteProject);

module.exports = router;