const UserModel = require("../model/UserModel");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup =  async (req, res) => {
  const { username, email, password } = req.body;
  console.log("Received signup request:", req.body);
  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }
    const newUser = new UserModel({ username, email, password });
    await newUser.save();
    res.json({ success: true, message: "Signup successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
module.exports.Login =  async (req, res) => {
  const { email, password } = req.body;
  console.log("Received login request:", req.body);
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "User not found" });
    }
    const isMatch= await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }
    // Generate a token (you can use JWT or any other method)
    const token = createSecretToken(user._id);
    console.log("Generated token:", token);
    res.cookie("token", token,{
      httpOnly: true,
      secure: true,
      sameSite:"None",
    });
    console.log("Cookie sent");
    console.log("Response Headers:", res.getHeaders());
    return res.status(200).json({ success: true, message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
