//projectRoutes.js

import express from "express";
import {
  addProject,
  getAllProjects,
  getProjectById,
  deleteProjectById,
  getProjectsByUserId,
  addTask,
} from "../controllers/projectController.js";
import { validateToken } from "../middleware/validateTokenHandler.js";

const router = express.Router();
//Route to deleyr a project
router.delete("/:id", deleteProjectById);

//Route to get all projects
router.get("/", getAllProjects);

//Route to create a new project
router.post("/", validateToken, addProject);

router.get("/user", validateToken, getProjectsByUserId);

//Route to create a new task
router.post("/project/:id/addtask", validateToken, addTask);

// `${import.meta.env.VITE_BASEURL}/projects/${projectId}/addtask`,

//Route to get a project by project ID
router.get("/project/:id", validateToken, getProjectById);

//Route to edit a project by project id number
router.patch("/:id", getProjectById);

export default router;
