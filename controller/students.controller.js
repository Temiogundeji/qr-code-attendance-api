const {
  isEmailValid,
  generateToken,
  generateHash,
  comparePassword,
} = require("../helpers/utils.js");

const { Student } = require("../models");

const registerStudent = async (req, res) => {
  const {
    username,
    email,
    password,
    levelId,
    departmentId,
    genderId,
    matricNum,
  } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    !levelId ||
    !departmentId ||
    !genderId ||
    !matricNum
  ) {
    return res.status(400).send({
      status: "error",
      error: "Some values are missing!",
    });
  }

  try {
    const { path } = req.file;
    console.log(path);
    const hashedPassword = generateHash(password);
    const newStudent = {
      username,
      email,
      password: hashedPassword,
      levelId,
      departmentId,
      genderId,
      matricNum,
      profilePics: req.file.path,
    };

    if (!isEmailValid(email)) {
      return res.status(400).send({
        message: "Please enter a valid email address",
      });
    }

    const isExist = await Student.findOne({
      where: { email: email },
    });
    if (isExist) {
      return res.status(400).json({
        message: "Student already exist",
      });
    }
    const token = generateToken(email);
    const stud = await Student.create(newStudent);
    return res.status(201).send({
      data: stud,
      token: token,
      message: `${username} has been registered successfully`,
      status: "success",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        status: "error",
        error: "Some values are missing!",
      });
    }

    if (!isEmailValid(email)) {
      return res.status(400).send({
        message: "Please enter a valid email address",
      });
    }

    const stud = await Student.findOne({
      where: { email: email },
    });
    if (!stud) {
      return res.status(400).json({
        message: "You do not have an account with us",
      });
    } else {
      const token = generateToken(email);
      if (!comparePassword(stud.password, password)) {
        return res
          .status(400)
          .send({ message: "The password entered is incorrect!" });
      }

      return res.status(200).send({
        data: stud,
        token: token,
        message: `Welcome ${stud.username}`,
        status: "success",
      });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  registerStudent,
  loginStudent,
};
