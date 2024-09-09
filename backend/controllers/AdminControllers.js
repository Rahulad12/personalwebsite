const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");

const createAdmin = (req, res) => {
  const { userName, password } = req.body;

  const admin = new Admin({ userName, password });

  admin
    .save()
    .then(() => {
      res.json({ message: "Admin Created Successfully" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Server Error" });
    });
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
