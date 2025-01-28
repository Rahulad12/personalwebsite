const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");

const createAdmin = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const admin = new Admin({ userName, password });
    await admin.save();
    res.status(201).json({ message: "Admin created", success: true, admin });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const Login = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const admin = await Admin.findOne({ userName });

    if (admin && (await admin.matchPassword(password))) {
      const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });
      res.json({
        token,
      });
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { Login, createAdmin };
