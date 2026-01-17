const express = require("express");
const { body } = require("express-validator");
const { register, login, getProfile, updateProfile, changePassword } = require("../controllers/authController.js"); 
const protect = require("../middleware/authMiddleware.js");

const router = express.Router();

//Validation middleware

const registerValidation = [
    body("username").trim().isLength({ min: 3 }).withMessage("Username must be at least 3 characters"),
    body("email").isEmail().normalizeEmail().withMessage("Please provide a valid email"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
];

const loginValidation = [
    body("email").isEmail().normalizeEmail().withMessage("Please provide a valid email"),
    body("password").notEmpty().withMessage("Password is required"),
];

//Public routes
router.post("/register", registerValidation, register);
router.post("/login", loginValidation, login);

//Protected routes
router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);
router.post("/change-password", protect, changePassword);

module.exports = router;