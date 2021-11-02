const { Router } = require('express');
const AttendanceController = require('../controller/attendances.controller');
const { verifyToken } = require("../middlewares/Auth");

const router = Router();

//Create new attendance
router.post("/attendances", verifyToken, AttendanceController.createAttendance);
//Get all attendances
//Add verify token
router.get("/attendances", AttendanceController.getAllAttendances);
//Get all attendances by student id
router.get("/student/attendances/:id", verifyToken, AttendanceController.getAttendanceByStudentId);
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


module.exports =  router;