const { Class, Course, Program, Week, Level } = require("../models");
const QRCode = require("qrcode");


//Add one more lecturerId column to attendance table

//create an attendance
const createClass = async (req, res) => {
  try {
    const classs = await Class.create(req.body);
    const qrImage = await QRCode.toDataURL(`${classs.id}`);

    return res.status(201).json({
      classs,
      message: "Class has been created successfully!",
      qrImage,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  } 
};

//get all classes
const getAllClasses = async (req, res) => {
  try {
    const allClasses = await Class.findAll({
      include: [
        {
          model: Level,
          attributes: ["levelName"],
        },
        {
          model: Course,
          attributes: ["courseTitle"],
        },
        {
          model: Program,
          attributes: ["programName"],
        },
        {
          model: Week,
          attributes: ["weekNumber"],
        },
      ],
    });
    return res.status(200).json({ allClasses });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//Get class by id
const getClassById = async (req, res) => {
  try {
    const { id } = req.params;
    const fpiclass = await Class.findOne({
      where: { id: id },
    });
    if (fpiclass) {
      return res.status(200).json({ fpiclass });
    }
    return res.status(404).send("class with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//Update a class
const updateClass = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Class.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const updatedClass = await Class.findOne({ where: { id: id } });
      return res.status(200).json({ class: updatedClass });
    }
    s;
    throw new Error("class not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
//Get classes by level
const getClassByLevel = async (req, res) => {
  try {
    const { levelId } = req.params;
    const allClass = await Class.findAll({
      where: {
        levelId,
      },
    });
    if (allClass) {
      return res.status(200).json({ allClass });
    }
    return res.status(404).send("class with the specified ID does not exists");
  } catch (e) {
    return res.status(500).send({
      message: e.message,
    });
  }
};

//Delete a class
const deleteClass = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Class.destroy({
      where: { id: id },
    });
    if (deleted) {
      return res.status(204).send("Class deleted");
    }
    throw new Error("Class not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Get classes by programId
const getClassByProgramId = async (req, res) => {
  try {
    const { programId } = req.params;
    const classes = await Class.findAll({
      where: { programId },
    });
    if (classes) {
      return res.status(200).json({ classes });
    }
    return res.status(404).send("class with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getClassesByWeekId = async (req, res) => {
  try {
    const { weekId } = req.params;
    const classes = await Class.findAll({
      where: { weekId },
    });
    if (classes) {
      return res.status(200).json({ classes });
    }
    return res.status(404).send("class with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getClassesByLevelId = async (req, res) => {
  try {
    const { levelId } = req.params;
    const classes = await Class.findAll({
      where: { levelId },
    });
    if (classes) {
      return res.status(200).json({ classes });
    }
    return res.status(404).send("class with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getClassesByCourseId = async (req, res) => {
  try {
    const { courseId } = req.params;
    const classes = await Class.findAll({
      where: { courseId },
    });
    if (classes) {
      return res.status(200).json({ classes });
    }
    return res.status(404).send("class with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createClass,
  getAllClasses,
  getClassById,
  getClassesByLevelId,
  getClassByProgramId,
  getClassesByWeekId,
  getClassesByCourseId,
  updateClass,
  deleteClass,
};
