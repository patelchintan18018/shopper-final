const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const authMiddleware = require("../middlewares/authMiddleware")

router.post("/contact", contactController.addContactDeatils);
module.exports = router;