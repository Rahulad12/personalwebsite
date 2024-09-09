// Initilize Express Router
const Achievement = require("../models/Achievement");
const Certificate = require("../models/Certificate");

const getallAchivement = async (req, res) => {
  const achivements = await Achievement.find({});
  try {
    res.send(achivements);
  } catch (e) {
    res.send(`Error ${e}`);
  }
};

const createAchivement = async (req, res) => {
  try {
    const { title, description, date } = req.body;

    const achivement = new Achievement({ title, description, date});
    console.log(achivement);

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
  try {
    const { title, description, date} = req.body;

    const certifications = new Certificate({ title, description, date});

    const c = await certifications.save();
    res.json(c);
  } catch (error) {throw new Error(`${error}`);}
};

module.exports = { getallAchivement, createAchivement, getCertification,createCertification };
