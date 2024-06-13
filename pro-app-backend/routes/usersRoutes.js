import express from "express";
import {
  createUser,
  currentUser,
  getAllUsers,
  getUserById,
  loginUser,
  userExist,
  getUserIdByUsername,
  changeUserImg,
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

router.get("/current", validateToken, currentUser);

router.patch("/update-pic", validateToken, changeUserImg);

router.get(
  "/search/getuserid/:userName",
  getUserIdByUsername,
  getProjectByUserIds
);

//Route to get single user by ID
router.get("/:id", getUserById);
export default router;
