console.log("✅ Root app.js is running...");
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('../Educonnect-BE/db'); // adjust if your db.js is elsewhere

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("Hello from backend root!");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working!" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
