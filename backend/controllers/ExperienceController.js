const Experience = require('../models/Experience');
const getExperience = async (req, res) => {
    try {
        const experience = await Experience.find();
        res.json(experience);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createExperience = async (req, res) => {
    const experience = new Experience({
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        role: req.body.role,
        startDate: req.body.startDate,
        endDate: req.body.endDate || null,
        description: req.body.description,
        status: req.body.status,
    });

    try {
        const newExperience = await experience.save();
        res.status(201).json(newExperience);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
module.exports = { getExperience, createExperience };
