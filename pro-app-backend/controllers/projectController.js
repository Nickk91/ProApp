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

export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("Project was not found");
    }
    const { projectName, projectDescription, projectImageUrl, projectStatus } =
      user;
    res.send({
      projectName,
      projectDescription,
      projectImageUrl,
      projectStatus,
    });
  } catch (error) {
    console.log("Error fetching project", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

export const deleteProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("Project was not found");
    }

    await project.remove();
    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    console.log("Error deleting project", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

export const addProject = async (req, res) => {
  try {
    console.log("CREATING A PROJECT WITH", req.body);

    const project = await Project.create({
      projectName: req.body.projectName,
      projectDescription: req.body.projectDescription,
      projectImage: req.body.projectImage,
      projectStatus: req.body.projectStatus,
      user: req.body.user,
    });

    const newProject = await Project.findById(project._id).populate(
      "user",
      "-password"
    );

    res.status(STATUS_CODE.CREATED).send(newProject);
  } catch (error) {
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
    console.log(STATUS_CODE.INTERNAL_SERVER_ERROR);
  }
};
