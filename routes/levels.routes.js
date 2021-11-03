const { Router } = require("express");
const LevelController = require("../controller/levels.controller");

const router = Router();

router.post("/level", LevelController.createLevel);
router.get("/level", LevelController.getAllLevels);

module.exports = router;
