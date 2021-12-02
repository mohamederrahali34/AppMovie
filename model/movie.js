mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
	_id: { type: Number, required: true },
	titre: { type: String, required: false },
	vote_average: { type: String, required: false },
	poster_path: { type: String, required: false },
	overview: { type: String, required: false },
	release_date: { type: String, required: false },
});

const movie = mongoose.model("Movie", movieSchema);

module.exports = movie;
