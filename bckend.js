// app.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Dummy user data (replace with DB later)
const users = {
  "admin": "12345",
  "user": "password"
};

// Login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (users[username] && users[username] === password) {
    res.json({ success: true, message: `Welcome ${username}!` });
  } else {
    res.status(401).json({ success: false, message: "Invalid username or password" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
