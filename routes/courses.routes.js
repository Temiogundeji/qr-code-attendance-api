const { Router } = require('express');
const CourseController = require('../controller/courses.controller');

const router = Router();

router.post('/courses', CourseController.createCourse);
router.get('/courses', CourseController.getAllCourses);
router.get('/courses/:id', CourseController.getCourseById);
router.put('/courses/:id', CourseController.updateCourse);
router.delete('/courses/:id', CourseController.deleteCourse);

module.exports =  router;