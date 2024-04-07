// controllers/authController.js
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.registerUser = async (req, res) => {
  try {
    let check = await User.findOne({ email: req.body.email });
    if (check) {
      return res.json({
        success: false,
        message: "Existing user found with the same Email ID",
      });
    }
    const user = new User({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    await user.save();
    const data = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(data, "secret-ecom");
    res.json({
      success: true,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

exports.loginUser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.json({
        success: false,
        message: "Wrong Email",
      });
    }
    let passwordcheck = req.body.password === user.password;
    if (passwordcheck) {
      //this user object will get after jwt token verification
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret-ecom");
      const {name, email} = user;

      res.status(200).json({
        success: true,
        token,
        user :{name, email}
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Wrong password",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
