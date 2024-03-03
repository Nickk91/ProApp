import express from "express";
import mongoose from "mongoose";
import { errorHandler } from "./middleware/errorMiddleware.js";
import usersRoutes from "./routes/usersRoutes.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

//cors middleware
app.use(cors());

//middleware for JSON parsing

app.use(express.json());

//users routes

app.use("/api/pro-app", usersRoutes);

//Error handling Middleware

app.use(errorHandler);

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT, () => {
    if (process.env.ENV === "development") {
      console.log(`LISTENING ON PORT ${process.env.PORT} in development`);
    } else {
      console.log(`LISTENING ON PORT ${process.env.PORT} in production`);
    }
  });
});
