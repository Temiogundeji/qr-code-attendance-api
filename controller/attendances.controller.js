const { Attendance, Student, Level } = require("../models");
const moment = require("moment");
const { Op } = require("sequelize");
const { level } = require("npmlog");

const createAttendance = async (req, res) => {
  try {
    const { studentId, classId } = req.body;
    if (!studentId || !classId) {
      return res.status(400).send({
        message: "Some values are missing!",
      });
    }
    //Ensure no student is able to mark attendance twice a day
    //Save attendance to the database
    const attendance = await Attendance.create(req.body);
    return res.status(201).json({
      attendance,
    });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

//Get Attendance by date
const getAttendanceByDate = async (req, res) => {
  try {
    const { createdAt } = req.params;
    const attendanceByDate = await Attendance.findAll({
      where: {
        createdAt: {
          [Op.eq]: createdAt,
        },
      },
      include: [{ model: Student, attributes: ["username"] }],
    });

    if (!attendanceByDate) {
      return res.status(400).json({
        message: "No attendances for this date",
      });
    }

    return res.status(200).json({
      attendanceByDate,
      message: "Attendance fetched successfully!",
    });
  } catch (error) {}
};

//Get Attendance by classId
const getAttendancesByClassId = async (req, res) => {
  const { classId } = req.body;
  try {
    const attendances = await Attendance.findAll({
      where: { classId },
    });
    if (attendances) {
      return res.status(200).json({ attendances });
    }
    return res
      .status(404)
      .send("Attendance with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//Get all attendances
const getAllAttendances = async (req, res) => {
  try {
    const attendances = await Attendance.findAll({
      include: [
        {
          model: Student,
          attributes: ["username", "matricNum"],
        },
      ],
    });
    if (attendances) {
      return res.status(200).json({ attendances });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAttendanceById = async (req, res) => {
  try {
    const { id } = req.params;
    const attendance = await Attendance.findOne({
      where: { id: id },
    });
    if (attendance) {
      return res.status(200).json({ attendance });
    }
    return res
      .status(404)
      .send("Attendance with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAttendanceByStudentId = async (req, res) => {
  try {
    const { studentId } = req.params;
    const attendances = await Attendance.findAll({
      where: { studentId },
    });
    if (attendances) {
      return res.status(200).json({ attendances });
    }
    return res
      .status(404)
      .send("Attendance with the specified student ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAttendanceByLecturerId = () => {};

const getAttendanceByLevelId = () => {};

const updateAttendance = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Attendance.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const updatedAttendance = await Attendance.findOne({ where: { id: id } });
      return res.status(200).json({ attendance: updatedAttendance });
    }
    throw new Error("Attendance not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteAttendance = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Department.destroy({
      where: { id: id },
    });
    if (deleted) {
      return res.status(204).send("Attendance deleted");
    }
    throw new Error("Attendance not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createAttendance,
  getAllAttendances,
  getAttendanceById,
  updateAttendance,
  deleteAttendance,
  getAttendanceByDate,
  getAttendancesByClassId,
  getAttendanceByStudentId,
};
