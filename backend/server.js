
import express from "express";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import doctorRoutes from "./routes/doctorRoutes.js";
import hospitalRoutes from "./routes/hospitalRoutes.js"
import searchRoutes from './routes/searchRoutes.js'

import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", 
  })
);
app.use(fileUpload());
app.use("/uploads", express.static("uploads"));


app.use("/api/doctors", doctorRoutes);
app.use('/api/hospitals', hospitalRoutes);
app.use('/api', searchRoutes);


app.listen(5000, () => {
  console.log("Server running on port 5000");
});
