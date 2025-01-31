const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Access Denied, No Token Provided" });
  }

  try {
    const verified = jwt.verify(token, "your-secret-key");
    req.user = verified; // Store the decoded token payload
    next();
  } catch (err) {
    res.status(400).json({ error: "Invalid Token" });
  }
};

// Middleware for checking if the user is an admin
const verifyAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Access Denied, Admins Only" });
  }
  next();
};

module.exports = { authMiddleware, verifyAdmin };
