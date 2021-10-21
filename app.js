const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8000;
const logger = require("morgan");
const app = express();

const studentRoutes = require("./routes/students.routes");
const lecturerRoutes = require("./routes/lecturers.routes");
const courseRoutes = require("./routes/courses.routes");
const classRoutes = require("./routes/classes.routes");
const departmentRoutes = require("./routes/departments.routes");
const attendanceRoutes = require("./routes/attendances.routes");

require("dotenv").config();

const corsOptions = {
  origin: "http://localhost:8081",
};

app.use(express.json());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));

// parse requests of content-type - application/json
app.use(cors(corsOptions));

app.get("/new", (req, res) => {
  return res.json({ message: "API for QRCode attendance system is here!" });
});

app.use("/api/v1", studentRoutes);
app.use("/api/v1", lecturerRoutes);
app.use("/api/v1", courseRoutes);
app.use("/api/v1", classRoutes);
app.use("/api/v1", attendanceRoutes);
app.use("/api/v1", departmentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

module.exports = app;
