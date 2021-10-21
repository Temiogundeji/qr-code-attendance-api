const { Router } = require('express');
const AttendanceController = require('../controller/attendances.controller');

const router = Router();

router.post('/attendances',  AttendanceController.createAttendance);
router.get('/attendances', AttendanceController.getAllAttendances);
router.get('/attendances/:id', AttendanceController.getAttendanceById);
router.get('/attendances/date', AttendanceController.getAttendanceByDate);
router.get('/attendances/class/:id', AttendanceController.getAttendancesByClassId);
router.patch('/attendances/:id', AttendanceController.updateAttendance);
router.delete('/attendances/:id', AttendanceController.deleteAttendance);


module.exports =  router;