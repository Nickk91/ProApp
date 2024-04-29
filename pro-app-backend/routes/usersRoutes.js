import express from "express";
import {
  createUser,
  currentUser,
  getAllUsers,
  getUserById,
  loginUser,
  userExist,
  getUserIdByUsername,
} from "../controllers/userController.js";
import { validateToken } from "../middleware/validateTokenHandler.js";

const router = express.Router();

//Route to get all users
router.get("/", getAllUsers);

//Route to check if user exists
router.post("/register", createUser);

//Route to create a new account
router.post("/userexist", userExist);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);

router.get("/getuserid", validateToken, getUserIdByUsername);

// app.use("/api/pro-app/users", usersRoutes);

//Route to get single user by ID
router.get("/:id", getUserById);
export default router;
