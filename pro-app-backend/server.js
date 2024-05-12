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
// app.use(cors());

// app.use(
//   cors({
//     origin: "https://proappdevenv.netlify.app",
//   })
// );

// Function to set CORS options dynamically
const corsOptionsDelegate = (req, callback) => {
  let corsOptions;
  let allowedOrigins = [process.env.PRODUCTION_FRONT_URL];

  if (allowedOrigins.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

// Apply CORS dynamically to all routes
app.use(cors(corsOptionsDelegate));

// in env file: PRODUCTION_FRONT_URL=https://proappdevenv.netlify.app

// app.use(
//   cors({
//     origin: ["*"],
//   })
// );

// const BASE_SERVER_URL = process.env.BASE_SERVER_URL;
// const CLIENT_PORT = process.env.CLIENT_PORT;

// const allowedOrigins = [
//   `${BASE_SERVER_URL}:${CLIENT_PORT}`,
//   process.env.PRODUCTION_FRONT_URL,
// ];

// // app.set("trust proxy", 1); only if you use google auth

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Invalid origin"));
//     }
//   },
//   credentials: true, // This is important for cookies, authorization headers with HTTPS
// };

// app.use(cors(corsOptions));

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
