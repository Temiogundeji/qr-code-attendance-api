const { Router } = require('express');
const AttendanceController = require('../controller/attendances.controller');
const { verifyToken } = require("../middlewares/Auth");

const router = Router();

//Create new attendance
router.post("/attendances", AttendanceController.createAttendance);
//Get attendances by lectuererId
router.get("/lecturer/attendances/:lecturerId", AttendanceController.getAttendancesByLecturerId);
//Get all attendances
//Add verify token
router.get("/attendances", AttendanceController.getAllAttendances);
//Get all attendances by student id
// router.get("/student/attendances/:id", verifyToken, AttendanceController.getAttendanceByStudentId);
//Get an attendance by id
router.get(
  "/attendances/:id",
  verifyToken,
  AttendanceController.getAttendanceById
);
//get a class by date
router.get(
  "/attendances/date",
  verifyToken,
  AttendanceController.getAttendanceByDate
);
//Get a class by id
router.get(
  "/attendances/class/:id",
  verifyToken,
  AttendanceController.getAttendancesByClassId
);

//Update an attendance
router.patch(
  "/attendances/:id",
  verifyToken,
  AttendanceController.updateAttendance
);
router.delete(
  "/attendances/:id",
  verifyToken,
  AttendanceController.deleteAttendance
);

router.get(
  "/student/attendances/:studentId",
  AttendanceController.getAttendanceByStudentId
);

module.exports =  router;