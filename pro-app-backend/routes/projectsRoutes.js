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
  getProjectsByProjectName,
  getUserProjectsByProjectNameByUserId,
  getProjectByUserIdParams,
  addProjectByAdmin,
  changeProjectPic,
} from "../controllers/projectController.js";
import { validateToken } from "../middleware/validateTokenHandler.js";
import { validateAdmin } from "../middleware/validateAdmin.js";

const router = express.Router();
//Route to delete a project
router.delete("/:id", validateToken, deleteProjectById);

//Route to get all projects
router.get("/", getAllProjects);

//Route to create a new project
router.post("/addproject", validateToken, addProject);

//Admin Route to create a project for a user by admin
router.post(
  "/addprojectbyadmin",
  validateToken,
  validateAdmin,
  addProjectByAdmin
);

//Route to get projects by user ID
router.get("/user/:id", validateToken, getProjectsByUserId);

//Route to get user
router.get("/user", validateToken, getProjectsByUserId);

//Route to search projects by user ID
router.get("/user/searchprojects", validateToken, getProjectsByUserId);

//Route to create a new task
router.post("/project/:id/addtask", validateToken, addTask);

//Route to edit  task
router.patch("/project/:id/edit-task", validateToken, editTaskByTaskId);

//Route to changeProjectPic
router.patch("/project/:id/change-pic", validateToken, changeProjectPic);

//Route to get a project by project ID
router.get("/project/:id", validateToken, getProjectById);

//Route to get a project by user Id add validate token later
router.get("/project/user/:userIdsArray", getProjectByUserIdParams);

//Admin Route to get by project names of all user
router.get(
  "/project/projectname/:searchItem",
  validateToken,
  validateAdmin,
  getProjectsByProjectName
);

//Route to get current user's project by project name
router.get(
  "/project/projectname-and-id/:searchItem/:userId",
  validateToken,
  getUserProjectsByProjectNameByUserId
);

//Route to get delete a task by task ID
router.patch("/:id/deletetask", validateToken, deleteTaskById);

//Route to get a project by project ID
router.patch("/:id/taskstatus", validateToken, updateTaskStatusById);

//Route to update project status by Project ID
router.patch("/:id", validateToken, updateProjectStatusById);

export default router;
