const user = require("../model/user");
const mongoose = require("mongoose");
signIn = (req, res) => {
	user.find({}, (err, docs) => {
		if (err) {
			res.status(500).send("error when searching user !");
		} else res.status(200).send(docs);
	});
};
findUserByEmail = (req, res) => {
	console.log("req.body ..... : ", req.body);
	user.find({ email: req.body.email }, (err, docs) => {
		if (err) {
			console.log("error when searching user !", err);
			res.status(400).send("error when searching user !");
		} else {
			if (docs) {
				res.status(200).send(docs);
			} else res.status(200).send(null);
		}
	});
};

register = (req, res) => {
	const newUser = new user({
		_id: mongoose.Types.ObjectId(),
		email: req.body.email,
		password: req.body.password,
	});
	console.log("newUser :", newUser);
	newUser.save((err) => {
		if (err) res.status(500).send("Error when savaing new user !" + err);
		else res.status(200).send("new user saved successfully !");
	});
};

module.exports = { register, signIn, findUserByEmail };
