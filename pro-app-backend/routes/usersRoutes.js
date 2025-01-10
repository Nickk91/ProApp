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
import { validateAdmin } from "../middleware/validateAdmin.js";

const router = express.Router();

//Admin Route to get all users
router.get("/", validateToken, validateAdmin, getAllUsers);

//Route to create a new account
router.post("/register", createUser);

//Route to check if user exists
router.post("/userexist", userExist);

//Route to create a new account
router.post("/login", loginUser);

//Route to fetch user data
router.get("/current", validateToken, currentUser);

//Route to update user image
router.patch("/update-pic", validateToken, changeUserImg);

router.post("/test-sanitize", (req, res) => {
  res.json(req.body);
});

router.get(
  "/search/getuserid/:userName",
  getUserIdByUsername,
  getProjectByUserIds
);

//Route to get single user by ID
router.get("/:id", getUserById);
export default router;
