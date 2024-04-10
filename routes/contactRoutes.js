const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const authMiddleware = require("../middlewares/authMiddleware")

router.post("/contact", contactController.addContactDeatils);
router.get("/user",authMiddleware, contactController.getUserData)
module.exports = router;