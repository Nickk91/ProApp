//projectRoutes.js

import express from "express";
import {
  addProject,
  getAllProjects,
  getProjectById,
  deleteProjectById,
  getProjectsByUserId,
  addTask,
  updateProjectStatusById,
  updateTaskStatusById,
  deleteTaskById,
  editTaskByTaskId,
  getProjectByUserIds,
  getProjectsByProjectName,
} from "../controllers/projectController.js";
import { validateToken } from "../middleware/validateTokenHandler.js";

const router = express.Router();
//Route to delete a project
router.delete("/:id", validateToken, deleteProjectById);

//Route to get all projects
router.get("/", getAllProjects);

//Route to create a new project
router.post("/", validateToken, addProject);

router.get("/user", validateToken, getProjectsByUserId);

router.get("/user/searchprojects", validateToken, getProjectsByUserId);

//Route to create a new task
router.post("/project/:id/addtask", validateToken, addTask);

//Route to edit  task
router.patch("/project/:id/edit-task", validateToken, editTaskByTaskId);

// `${import.meta.env.VITE_BASEURL}/projects/${projectId}/addtask`,

//Route to get a project by project ID
router.get("/project/:id", validateToken, getProjectById);

//Route to get a project by user Id
router.get("/project/userId", validateToken, getProjectByUserIds);

//Route to get a project by project name (ADD VALIDTAE TOKEN LATER)
router.get(
  "/project/projectname/:searchItem",
  validateToken,
  getProjectsByProjectName
);

// projects/project/projectname

//Route to get delete a task by task ID
router.patch("/:id/deletetask", validateToken, deleteTaskById);

//Route to get a project by project ID
router.patch("/:id/taskstatus", validateToken, updateTaskStatusById);

// //Route to edit a project by project id number
// router.patch("/:id", getProjectById);

router.patch("/:id", validateToken, updateProjectStatusById);

export default router;
