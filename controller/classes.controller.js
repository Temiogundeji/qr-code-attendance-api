const { Class } = require("../models");
//create class
const createClass = async (req, res) => {
  try {
    const newClass = await Class.create(req.body);
    return res.status(201).json({
      class: newClass,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
//get all classes
const getAllClasses = async (req, res) => {
  try {
    const allClasses = await Class.findAll();
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

module.exports = {
  createClass,
  getAllClasses,
  getClassById,
  updateClass,
  deleteClass,
};
