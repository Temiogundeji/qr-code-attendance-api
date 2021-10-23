const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

//Token has be differentiated by role to ensure that student's don't have access to
//data meant to be used by the lecturers

const verifyToken = async (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(400).send("Token not provided.");
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = {
      email: decoded.email,
      username: decoded.username,
    };

    next();
  } catch (err) {
    res.status(401).send("Unauthorized!");
  }
};

module.exports = { verifyToken };
