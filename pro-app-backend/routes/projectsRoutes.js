import express from "express";
import {
  addProject,
  getAllProjects,
  getProjectById,
  deleteProjectById,
} from "../controllers/projectController.js";
import { validateToken } from "../middleware/validateTokenHandler.js";

const router = express.Router();

//Route to get all users
router.get("/project", getAllProjects);

//Route to create a new account
router.post("/addProject", addProject);

//Route to create a new account
router.delete("/projects/:id", deleteProjectById);

// router.get("/current", validateToken, currentUser);

//Route to get single user by ID
router.get("/:id", getProjectById);
export default router;
