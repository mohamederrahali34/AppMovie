const comment = require("../model/Comment");
const mongoose = require("mongoose");
const user = require("../model/user");
getComments = (req, res) => {
	comment.find({}, (docs) => {
		if (docs) {
			res.status(200).send(docs);
		} else res.status(500).send("Error when loading comments !");
	});
};
findUserByEmail = (email) => {
	user.find({ email: email }, (docs) => {
		if (docs) return docs._id;
		else console.log("can not find user !");
	});
};
saveComment = (req, res) => {
	const newComment = new comment({
		_id: mongoose.Types.ObjectId(),
		text: req.body.text,
		user: findUserByEmail(req.body.user.email),
	});

	console.log("newComment :", newComment);
	newComment.save((err) => {
		if (err) res.status(500).send("Error when savaing new comment !" + err);
		else res.status(200).send("new comment saved successfully !");
	});
};

module.exports = { saveComment, getComments };
