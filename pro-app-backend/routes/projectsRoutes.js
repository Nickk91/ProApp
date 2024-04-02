//projectRoutes.js

import express from "express";
import {
  addProject,
  getAllProjects,
  getProjectById,
  deleteProjectById,
  getProjectsByUserId,
} from "../controllers/projectController.js";
import { validateToken } from "../middleware/validateTokenHandler.js";

const router = express.Router();
//Route to deleyr a project
router.delete("/:id", deleteProjectById);

//Route to get all projects
router.get("/", getAllProjects);

//Route to create a new account
router.post("/", validateToken, addProject);

//Route to get a project by project ID
router.get("/:id", getProjectById);

//Route to edit a project by project id number
router.patch("/:id", getProjectById);

router.get("/user", validateToken, getProjectsByUserId);

export default router;
