const Project = require("../models/Project");

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    throw new Error(`Error: ${err.message} || Projects not found`);
  }
};

const createProject = async (req, res) => {
  try {
    const { title, description, image, startDate, endDate, link, status } =
      req.body;

    const project = new Project({
      title,
      description,
      image,
      startDate,
      endDate,
      link,
      status,
    });

    const createdProject = await project.save();
    res.status(201).json(createdProject);
  } catch (err) {
    throw new Error(` ${err.message} || Project not created`);
  }
};

const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.status(200).json(project);
  } catch (err) {
    throw new Error(`Error: ${err.message} || Project not found`);
  }
};

const updateProject = async (req, res) => {
  try {
    const { title, description, image, startDate, endDate } = req.body;
    const project = await Project.findById(req.params.id);

    if (project) {
      project.title = title || project.title;
      project.description = description || project.description;
      project.image = image || project.image;
      project.startDate = startDate || project.startDate;
      project.endDate = endDate || project.endDate;
      project.link = link || project.link;

      const updatedProject = await project.save();
      res.status(201).json(updatedProject);
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (err) {
    throw new Error(`Error: ${err.message} || Project not updated`);
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (project) {
      await project.remove();
      res.json({ message: "Project removed" });
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (err) {
    throw new Error(`Error: ${err.message} || Project not deleted`);
  }
};

module.exports = {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getProjectById,
};
