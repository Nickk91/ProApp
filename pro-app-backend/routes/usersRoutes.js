import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
} from "../controllers/userController.js";

const router = express.Router();

//Route to get all users
router.get("/users", getAllUsers);

//Route to get single user by ID
router.get("/:id", getUserById);

//Route to create a new account
router.post("/register", createUser);

export default router;
