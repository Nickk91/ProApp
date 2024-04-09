import STATUS_CODE from "../constants/statusCodes.js";
import Project from "../models/projectModel.js";

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    console.log("Projects found:", projects);
    res.send(projects);
  } catch (error) {
    console.log("Error fetching projects:", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error ssss" });
  }
};

export const getProjectsByUserId = async (req, res) => {
  console.log("req.user._id:", req.user._id);

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

export const getProjectById = async (req, res) => {
  try {
    console.log("req.params", req.params);
    const { id } = req.params;
    console.log("ID IS:", id);
    const project = await Project.findById(id);
    console.log("project IS:", project);
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
    } = project;
    res.send({
      projectName,
      projectDescription,
      projectImage,
      projectStatus,
      projectTasks,
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
      status: "todo",
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
    console.log("CREATING A PROJECT WITH", req.body);
    console.log("ID", req.user._id);
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
