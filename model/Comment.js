mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	text: { type: String, required: true },
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
	date: { type: Date, required: false, default: Date.now },
	movie: { type: String, required: false },
});

const comment = mongoose.model("Comment", commentSchema);

module.exports = comment;
