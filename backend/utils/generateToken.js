const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config");

const generateToken = (user) => {
  return jwt.sign({ user }, jwtSecret, { expiresIn: "1h" });
};

module.exports = generateToken;
