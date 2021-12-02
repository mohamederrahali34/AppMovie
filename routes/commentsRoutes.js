const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.get("/comments", (req, res) => {
	commentController.getComments(req, res);
});
router.post("/newComments", (req, res) => {
	console.log("req.body :", req.body);
	commentController.saveComment(req, res);
	console.log("new Comment added with success !");
});

module.exports = router;
