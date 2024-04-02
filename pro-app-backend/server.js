import express from "express";
import mongoose from "mongoose";
import { errorHandler } from "./middleware/errorMiddleware.js";
import usersRoutes from "./routes/usersRoutes.js";
import projectsRoutes from "./routes/projectsRoutes.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// cors middleware
app.use(cors());

// middleware for JSON parsing
app.use(express.json());

// Error handling middleware
app.use(errorHandler);

// projects routes

app.use("/api/pro-app/projects", projectsRoutes);

// users routes
app.use("/api/pro-app/users", usersRoutes);

app.use("/authGood", (req, res, next) => {
  res.send({ userLevel: 1 });
});

// // Apply validateToken middleware to routes that require authentication
// app.use("/api/pro-app", validateToken);

// users routes

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1); // Exit with failure
  });
