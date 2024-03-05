import express from "express";
import {
  createUser,
  currentUser,
  getAllUsers,
  getUserById,
  loginUser,
} from "../controllers/userController.js";
import { validateToken } from "../middleware/validateTokenHandler.js";

const router = express.Router();

//Route to get all users
router.get("/users", getAllUsers);

//Route to create a new account
router.post("/register", createUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);

//Route to get single user by ID
router.get("/:id", getUserById);
export default router;
