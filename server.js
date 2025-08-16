const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // to load MONGO_URI from .env

const app = express();

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

// ✅ Start server only after DB connection
app.listen(3000, () => {
  console.log("🚀 Server running on port 3000");
});
