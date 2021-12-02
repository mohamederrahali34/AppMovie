const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/signIn", (req, res) => {
	userController.signIn(req, res);
});
router.post("/register", (req, res) => {
	userController.register(req, res);
});
router.post("/user", (req, res) => {
	userController.findUserByEmail(req, res);
});
module.exports = router;
