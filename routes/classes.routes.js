const { Router } = require('express');
const ClassController = require('../controller/classes.controller');

const router = Router();

router.post('/class', ClassController.createClass);
router.get('/class', ClassController.getAllClasses);
router.get('/class/:id', ClassController.getClassById);
router.put('/class/:id', ClassController.updateClass);
router.delete('/class/:id', ClassController.deleteClass);

module.exports =  router;