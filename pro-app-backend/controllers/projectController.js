import STATUS_CODE from "../constants/statusCodes.js";
import Project from "../models/projectModel.js";

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.send(projects);
  } catch (error) {
    console.log("Error fetching projects:", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error ssss" });
  }
};

export const getProjectsByUserId = async (req, res) => {
  try {
    const projects = await Project.find({ user: req.user._id });
    res.json(projects);
  } catch (error) {
    console.log("Error fetching projects:", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error ssss" });
  }
};

export const getProjectByUserIds = async (req, res) => {
  try {
    const userIdsArray = req.userIdsArray;

    console.log("getProjectByUserIds userIdsArray is:", userIdsArray);

    const projects = await Project.find({
      user: { $in: userIdsArray },
    });

    console.log(
      "in getProjectByUserIds projects that are returned are:",
      projects
    );

    return res.status(STATUS_CODE.OK).json({ projects });
  } catch (error) {
    console.log("Error fetching projects:", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

export const getProjectByUserIdParams = async (req, res) => {
  try {
    const { userIdsArray } = req.params;
    console.log("userIdsArray PPP:", userIdsArray);

    if (!userIdsArray) {
      return res
        .status(STATUS_CODE.BAD_REQUEST)
        .json({ error: "No user IDs provided" });
    }

    if (!userIdsArray) {
      return res
        .status(STATUS_CODE.BAD_REQUEST)
        .json({ error: "No user IDs provided" });
    }

    // Assuming userIdsArray is passed as a comma-separated string
    const userIds = userIdsArray.split(",");

    console.log("getProjectByUserIdParams userIdsArray is:", userIds);

    const projects = await Project.find({
      user: { $in: userIds },
    });

    console.log(
      "in getProjectByUserIdParams projects that are returned are:",
      projects
    );

    return res.status(STATUS_CODE.OK).json({ projects });
  } catch (error) {
    console.log("Error fetching projects:", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

export const getProjectsByProjectName = async (req, res) => {
  try {
    console.log("IN getProjectsByProjectName controller:");
    const { searchItem } = req.params;
    console.log("IN Controller projectName ", searchItem);

    const projects = await Project.find({
      projectName: { $regex: new RegExp(searchItem, "i") },
    });
    if (!projects || projects.length === 0) {
      return res
        .status(STATUS_CODE.NOT_FOUND)
        .json({ error: "No projects were found" });
    }

    return res.status(STATUS_CODE.OK).json({ projects });
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

export const getUserProjectsByProjectNameByUserId = async (req, res) => {
  try {
    console.log("IN getUserProjectsByProjectNameByUserId:");
    const { searchItem, userId } = req.params;
    console.log("IN Controller projectName ", searchItem);
    console.log("IN Controller userId ", userId);

    const projects = await Project.find({
      user: userId,

      projectName: { $regex: new RegExp(searchItem, "i") },
    });
    if (!projects || projects.length === 0) {
      return res
        .status(STATUS_CODE.NOT_FOUND)
        .json({ error: "No projects were found" });
    }

    return res.status(STATUS_CODE.OK).json({ projects });
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("Project was not found");
    }
    const {
      projectName,
      projectDescription,
      projectImage,
      projectStatus,
      projectTasks,
      user,
    } = project;
    res.send({
      projectName,
      projectDescription,
      projectImage,
      projectStatus,
      projectTasks,
      user,
    });
  } catch (error) {
    console.log("Error fetching project", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

export const addTask = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);

    if (!project) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("Project was not found");
    }

    const newTask = {
      name: req.body.name,
      description: req.body.description,
      status: req.body.selectedTaskStatus,
    };

    project.projectTasks.push(newTask);
    await project.save();
    res.send({
      message: "Task added successfully",
    });
  } catch (error) {
    console.error("Error adding task", error);

    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

export const updateTaskStatusById = async (req, res) => {
  try {
    console.log("updateTaskStatusById controller!!!");
    const { id } = req.params;
    const taskId = req.body.taskId;
    const newStatus = req.body.status;

    console.log("project id:", id);
    console.log("taskId!!:", taskId);
    console.log("NEW STATUS!!:", newStatus);

    const project = await Project.findById(id);

    if (!project) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("Project was not found");
    }

    let taskIndex = project.projectTasks.findIndex(
      (task) => task._id.toString() === taskId
    );

    if (taskIndex === -1) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("Task was not found in the project");
    }

    project.projectTasks[taskIndex].status = newStatus;
    await project.save();
    res.send({
      message: "Task status updated successfully",
    });
  } catch (error) {
    console.error("Error updating task status", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

export const deleteTaskById = async (req, res) => {
  try {
    console.log("deleteTask controller!!!");
    const { id } = req.params;
    const taskId = req.body.taskId;

    console.log("project id:", id);
    console.log("taskId!!:", taskId);

    const project = await Project.findById(id);

    if (!project) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("Project was not found");
    }

    let taskIndex = project.projectTasks.findIndex(
      (task) => task._id.toString() === taskId
    );

    if (taskIndex === -1) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("Task was not found in the project");
    }

    project.projectTasks.splice(taskIndex, 1);

    await project.save();

    const updatedProject = await Project.findById(id);
    console.log("updatedProject be:", updatedProject);

    res.status(STATUS_CODE.OK).json({ project: updatedProject });
  } catch (error) {
    console.error("Error deleting task status", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

export const deleteProjectById = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await Project.findOneAndDelete({ _id: id });

    if (!project) {
      return res
        .status(STATUS_CODE.NOT_FOUND)
        .json({ error: "Project not found" });
    }

    return res.json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error);
    return res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

export const addProject = async (req, res) => {
  try {
    const project = await Project.create({
      projectName: req.body.projectName,
      projectDescription: req.body.projectDescription,
      projectImage: req.body.projectImage,
      user: req.user._id,
    });

    const newProject = await Project.findById(project._id).populate("user");

    res.status(STATUS_CODE.CREATED).send(newProject);
  } catch (error) {
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
    console.log(STATUS_CODE.INTERNAL_SERVER_ERROR);
  }
};

export const addProjectByAdmin = async (req, res) => {
  try {
    console.log("addProjectByAdmin controller!!");
    const project = await Project.create({
      projectName: req.body.projectName,
      projectDescription: req.body.projectDescription,
      projectImage: req.body.projectImage,
      user: req.body.userId,
    });
    console.log("project in controller:", project);

    const newProject = await Project.findById(project._id).populate("user");

    res.status(STATUS_CODE.CREATED).send(newProject);
  } catch (error) {
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
    console.log(STATUS_CODE.INTERNAL_SERVER_ERROR);
  }
};

export const updateProjectStatusById = async (req, res) => {
  try {
    const { id } = req.params;
    const { selectedValue } = req.body;

    console.log("id in controller:", id);

    console.log("selectedValue in controller:", selectedValue);
    const project = await Project.findById(id);
    console.log("project in controller:", project);

    if (!project) {
      return res
        .status(STATUS_CODE.NOT_FOUND)
        .json({ message: "Project not found" });
    }

    project.projectStatus = selectedValue;
    await project.save();

    res
      .status(STATUS_CODE.OK)
      .json({ message: "Project status updated successfully", project });
  } catch (error) {
    console.error("Error updating project status", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error" });
  }
};

export const changeProjectPic = async (req, res) => {
  try {
    console.log("changeProjectPic:");
    const { projectId, url } = req.body;
    console.log("Received projectId:", projectId);
    console.log("Received url:", url);

    const project = await Project.findById(userId);
    console.log("Project found:", user);

    if (!project) {
      return res
        .status(STATUS_CODE.NOT_FOUND)
        .json({ message: "Project not found" });
    }

    project.projectImage = url;
    await user.save();

    res
      .status(STATUS_CODE.OK)
      .json({ message: "Project's image updated successfully", user });
  } catch (error) {
    console.error("Error updating project's image", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error" });
  }
};

export const editTaskByTaskId = async (req, res) => {
  try {
    console.log("editTaskByTaskId controller!!!");

    const { id } = req.params;
    const taskId = req.body.taskId;
    const newStatus = req.body.selectedTaskStatus;
    const newName = req.body.name;
    const newDescription = req.body.description;

    const project = await Project.findById(id);

    if (!project) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("Project was not found");
    }

    let taskIndex = project.projectTasks.findIndex(
      (task) => task._id.toString() === taskId
    );

    if (taskIndex === -1) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("Task was not found in the project");
    }

    project.projectTasks[taskIndex].status = newStatus;
    project.projectTasks[taskIndex].description = newDescription;
    project.projectTasks[taskIndex].name = newName;
    await project.save();
    res.send({
      message: "Task status updated successfully",
    });
  } catch (error) {
    console.error("Error updating task status", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};
