const Project = require("../models/Project");

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProject = async (req, res) => {
  try {
    const { title, description, image, startDate, endDate, link } = req.body;
    const project = await Project.findById(req.params.id);
    console.log(project);
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
  } catch (error) {
    res.status(500).json({ message: error.message });
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
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getProjectById,
};
