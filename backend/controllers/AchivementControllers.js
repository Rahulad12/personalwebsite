// Initilize Express Router
const Achievement = require("../models/Achievement");
const Certificate = require("../models/Certificate");

const getallAchivement = async (req, res) => {
  try {
    const achivements = await Achievement.find({});
    res.send(achivements);
  } catch (e) {
    res.send(`Error ${e}`);
  }
};

const createAchivement = async (req, res) => {
  const { title, description, date } = req.body;
  try {

    const achivement = new Achievement({ title, description, date});
    const a1 = await achivement.save();
    res.status(201).json(a1);
  } catch (e) {
    res.send(`${e}`);
  }
};

const getCertification = async (req, res) => {
  try {
    const certification = await Certificate.find({});
    res.json(certification);
  } catch (error) {
    res.send(`${error}`);
  }
};

const createCertification = async (req, res) => {
  const { title, description, date} = req.body;
  try {

    const certifications = new Certificate({ title, description, date});

    const c = await certifications.save();
    res.json(c);
  } catch (error) {throw new Error(`${error}`);}
};

module.exports = { getallAchivement, createAchivement, getCertification,createCertification };
