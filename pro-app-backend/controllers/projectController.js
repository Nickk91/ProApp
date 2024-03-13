import STATUS_CODE from "../constants/statusCodes.js";
import Project from "../models/projectModel.js";

// @des get all projects
// @route GET / api/n
// @access Public
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    console.log(projects);
    res.send(projects);
  } catch (error) {
    console.log("Error fetching project", error);
    res
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
    const { projectName, projectDescription, projectImageUrl, isCompleted } =
      user;
    res.send({ projectName, projectDescription, projectImageUrl, isCompleted });
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
      projectImageUrl: req.body.projectImageUrl,
    });
    res.status(STATUS_CODE.CREATED).send({
      projectName: project.projectName,
      projectDescription: project.projectDescription,
      _id: project._id,
    });
  } catch (error) {
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
    console.log(STATUS_CODE.INTERNAL_SERVER_ERROR);
  }
};
