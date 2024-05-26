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
import { getProjectByUserIds } from "../controllers/projectController.js";
import { validateToken } from "../middleware/validateTokenHandler.js";

const router = express.Router();

//Route to get all users
router.get("/", getAllUsers);

//Route to check if user exists
router.post("/register", createUser);

//Route to create a new account
router.post("/userexist", userExist);

router.post("/login", loginUser);

console.log("currentUser:", currentUser);

router.get("/current", validateToken, currentUser);

//Route to get userId by userName (ADD VALIDTAE TOKEN LATER)
router.get(
  "/search/getuserid/:userName",
  getUserIdByUsername,
  getProjectByUserIds
);

//Route to get single user by ID
router.get("/:id", getUserById);
export default router;
