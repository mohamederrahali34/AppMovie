const express = require("express");
const router = express.Router();
const MovieController = require("../controllers/movieController");

router.post("/movie", (req, res) => {
	MovieController.findMovieById(req, res);
});
router.get("/movies", (req, res) => {
	MovieController.getMovies(req, res);
});
router.post("/newMovie", (req, res) => {
	console.log("req.body .............. :", req.body);
	MovieController.saveMovie(req, res);
	console.log("new Movie added with success !");
});
router.put("/movies/:id", (req, res) => {
	MovieController.updateMovie();
});
router.delete("/movies/:id", (req, res) => {
	MovieController.deleteMovie(req, res);
});
module.exports = router;
