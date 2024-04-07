// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const productsController = require("../controllers/productsController")

router.post("/register", authController.registerUser);
router.post("/login",  authController.loginUser);
router.post("/addproduct",  productsController.addproduct);
router.get("/allproducts",  productsController.allproducts);

module.exports = router;
