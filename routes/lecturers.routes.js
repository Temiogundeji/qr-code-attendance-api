const Router = require('express');

const { registerLecturer, loginLecturer } = require('../controller/lecturers.controller');

const router = Router();

const multer = require("multer");
const { imageStorage } = require("../helpers/cloudinaryConfig");

const parser = multer({ storage: imageStorage });
const parserConst = parser.single("profilePics");

router.post("/auth/lecturer/register", parserConst, registerLecturer);
router.post('/auth/lecturer/login', loginLecturer);

module.exports =  router;