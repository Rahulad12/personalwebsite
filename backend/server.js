const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");
const projectRoutes = require("./routes/projectRoutes");
const userRoutes = require("./routes/userRoutes");
const achievementRoutes = require("./routes/achivementRoutes");
const experienceRoutes = require("./routes/experienceRoutes");
const adminRoutes = require("./routes/adminRoutes");
// const uploadRoutes = require("./routes/uploadRoutes");

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Define routes
app.use("/api/admin", adminRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/contact", userRoutes);
app.use("/api", achievementRoutes);
app.use("/api/experience", experienceRoutes);
// app.use("/api/upload", uploadRoutes);

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend", "dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}


// Error handling for any unexpected errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

console.log("node env", process.env.NODE_ENV);
// console.log("mongo uri", process.env.MONGO_URI);
console.log("node version", process.version);
