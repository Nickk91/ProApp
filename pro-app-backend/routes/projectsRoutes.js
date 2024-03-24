import express from "express";
import {
  addProject,
  getAllProjects,
  getProjectById,
  deleteProjectById,
} from "../controllers/projectController.js";
import { validateToken } from "../middleware/validateTokenHandler.js";

const router = express.Router();
//Route to deleyr a project
router.delete("/:id", deleteProjectById);

//Route to get all projects
router.get("/", getAllProjects);

//Route to create a new account
router.post("/", addProject);

//Route to get single user by ID
router.get("/:id", getProjectById);

//Route to get a project by project ID
router.get("/:id", getProjectById);
export default router;
