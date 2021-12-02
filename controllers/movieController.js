const movie = require("../model/movie");
var mongoose = require("mongoose");

getMovies = (req, res) => {
	movie.find({}, function (err, docs) {
		if (err) res.send("server error !");
		else res.status(200).send(docs);
	});
};

saveMovie = (req, res) => {
	movie.find({ _id: req.body.id }, function (err, docs) {
		if (err) res.status(500).send("server error !");
		else {
			if (docs?.length == 0) {
				console.log("adding movie ...............");
				const newmovie = new movie({
					_id: req.body.id,
					titre: req.body.titre,
					vote_average: req.body.vote_average,
					poster_path: req.body.poster_path,
					overview: req.body.overview,
					release_date: req.body.release_date,
				});
				newmovie.save((err) => {
					if (err) res.status(500).send(false);
					else res.status(200).json(true);
				});
			} else {
				console.log("movie already exist ...............");
				res.status(200).send(false);
			}
		}
	});
};

findMovieById = (req, res) => {
	movie.find({ _id: req.body.id }, function (err, docs) {
		if (err) res.status(500).send("server error !");
		else res.status(200).send(docs);
	});
};
updateMovie = (req, res) => {};
deleteMovie = (req, res) => {};
module.exports = { getMovies, findMovieById, saveMovie };
