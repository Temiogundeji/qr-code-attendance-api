const { Router } = require('express');
const ClassController = require('../controller/classes.controller');

const router = Router();

router.post('/class', ClassController.createClass);
router.get('/class', ClassController.getAllClasses);
router.get("/program/class/:programId", ClassController.getClassByProgramId);
router.get("/level/class/:levelId", ClassController.getClassesByLevelId);
router.get("/week/class/:weekId", ClassController.getClassesByWeekId);
router.get("/course/class/:weekId", ClassController.getClassesByCourseId);
router.get('/class/:id', ClassController.getClassById);
router.put('/class/:id', ClassController.updateClass);
router.delete('/class/:id', ClassController.deleteClass);

module.exports =  router;