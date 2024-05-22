const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const { port, jwtSecret } = require("./config");
const quranRoutes = require("./routes/quranRoutes");
const generateToken = require("./utils/generateToken");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mock user data
const user = {
  id: 1,
  username: "mockUser",
  password: bcrypt.hashSync("mockPassword", 10),
};

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  // Authenticate user
  if (
    username === user.username &&
    bcrypt.compareSync(password, user.password)
  ) {
    const token = generateToken({ id: user.id });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// Routes
app.use("/api/quran", quranRoutes);

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
