const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");
const { authMiddleware, verifyAdmin } = require("../middlewares/authMiddleware"); // Import both middlewares

router.post("/register", registerUser);
router.post("/login", loginUser);

//  Protect user profile route
router.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "Welcome to your profile", user: req.user });
});

//  Protect admin-only route
router.get("/admin", authMiddleware, verifyAdmin, (req, res) => {
  res.json({ message: "Welcome Admin!", user: req.user });
});

module.exports = router;
