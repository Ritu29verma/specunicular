// server.js
import express from "express";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import doctorRoutes from "./routes/doctorRoutes.js";
import hospitalRoutes from "./routes/hospitalRoutes.js"
import cors from "cors";
import dotenv from "dotenv";

// config env
dotenv.config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
  })
);
app.use(fileUpload());
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/doctors", doctorRoutes);
app.use('/api/hospitals', hospitalRoutes);

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
