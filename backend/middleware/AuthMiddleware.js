const jwt = require("jsonwebtoken");

const userVerification = (req, res, next) => {

  console.log("Cookies:", req.cookies);

  const token = req.cookies.token;

  console.log("Token:", token);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, process.env.TOKEN_KEY, (err, data) => {

    console.log("JWT Error:", err);
    console.log("JWT Data:", data);

    if (err) {
      return res.status(401).json({ message: "Invalid Token" });
    }

    req.user = data;
    next();
  });
};

module.exports = userVerification;