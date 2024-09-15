const User = require("../models/User");
const nodemailer = require("nodemailer");
const PDFDocument = require("pdfkit");
require("dotenv").config();

const getallUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createUser = async (req) => {
  const { name, email, message, hire, status } = req.body;

  if (!name || !email || !message || !hire) {
    throw new Error("All fields are required.");
  }

  const user = new User({ name, email, message, hire });
  await user.save();

  return user;
};

const sendContactEmail = async (req) => {
  const { name, email, message, hire } = req.body;

  const doc = new PDFDocument();
  let pdfBuffer = [];

  doc.on("data", (chunk) => {
    pdfBuffer.push(chunk);
  });

  doc.on("end", async () => {
    pdfBuffer = Buffer.concat(pdfBuffer);

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "st.rahul07@gmail.com",
        pass: process.env.NODEMAILER_PASSKEY,
      },
    });

    const mailOptions = {
      from: email,
      to: "adrahul2014@gmail.com",
      subject: "New Contact Form Submission",
      text: `You have a new contact from ${name}`,
      attachments: [
        {
          filename: "message.pdf",
          content: pdfBuffer,
        },
      ],
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Detailed Error:", error);
        throw new Error("Email sending failed");
      } else {
        console.log("Email sent:", info.response);
      }
    });
  });

  doc.fontSize(12).text(`Name: ${name}`, { align: "left" });
  doc.text(`Email: ${email}`, { align: "left" });
  doc.text(`Message: ${message}`, { align: "left" });
  doc.text(`Project Details: ${hire}`, { align: "left" });

  doc.end();
};

const createUserAndSendEmail = async (req, res) => {
  try {
    const user = await createUser(req);
    // await sendContactEmail(req);

    res
      .status(201)
      .json({ message: "User created and email sent successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const DeleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  try {
    if (user) {
      await user.deleteOne();
      res.json({ message: "Contact details remove" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const setStatus = async (req, res) => {
  try {
    const user = await User.findById(req.params.id); // Find the user by ID
    if (user) {

      user.status = req.body.status// Update the status
      await user.save();

      res.json({ message: "Status updated" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: "Server error" }); // Send error response
  }
};

module.exports = { getallUser, createUserAndSendEmail, DeleteUser, setStatus };
