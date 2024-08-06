const express = require("express");

const authController = require("../controllers/auth.controller");

const router = express.Router();

router.get("/auth/signup", authController.getSignup);

router.post("/auth/signup", authController.signup);

router.get("/auth/login", authController.getLogin);

router.post("/login", authController.login);

router.post("/logout", authController.logout);

module.exports = router;
