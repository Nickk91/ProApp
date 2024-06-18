import express from "express";
import mongoose from "mongoose";
import { errorHandler } from "./middleware/errorMiddleware.js";
import usersRoutes from "./routes/usersRoutes.js";
import projectsRoutes from "./routes/projectsRoutes.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Determine the environment and set the appropriate MongoDB URI and frontend URL
const mongoUri =
  process.env.ENV === "production"
    ? process.env.MONGO_URI_PROD
    : process.env.MONGO_URI;
const frontendUrl =
  process.env.ENV === "production"
    ? process.env.PRODUCTION_FRONT_URL
    : `${process.env.BASE_SERVER_URL}:${process.env.CLIENT_PORT}`;

// CORS configuration
const corsOptions = {
  origin: frontendUrl, // Your frontend URL
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());

// Error handling middleware
app.use(errorHandler);

// Projects routes
app.use("/api/pro-app/projects", projectsRoutes);

// Users routes
app.use("/api/pro-app/users", usersRoutes);

app.use("/authGood", (req, res, next) => {
  res.send({ userLevel: 1 });
});

// MongoDB connection and server start
mongoose
  .connect(mongoUri)
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
