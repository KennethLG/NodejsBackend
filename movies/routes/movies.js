const express = require("express");
const MoviesService = require("../services/movies");

function moviesAPI(app) {
	const router = express.Router();
	app.use("/api/movies", router);

	const moviesService = new MoviesService();

	router.get("/", async (req, res, next) => {
		const {tags} = req.query;
		try {
			const movies = await moviesService.getMovies({ tags});
			res.status(200).json({
				data: movies,
				msg: "movies listed"
			})
		} catch(e) {
			next(e);
		}
	});

	router.get("/:movieId", async (req, res, next) => {
		const { movieId } = req.params;
		try {
			const movies = await moviesService.getMovie({ movieId});
			res.status(200).json({
				data: movies,
				msg: "movies retrieve"
			})
		} catch(e) {
			next(e);
		}
	});

	router.post("/", async (req, res, next) => {
		const {body:movie} = req;
		try {
			const createMovieId = await moviesService.createMovie({ movie });
			res.status(201).json({
				data: createMovieId,
				msg: "movies created"
			})
		} catch(e) {
			next(e);
		}
	});

	router.put("/:id", async (req, res, next) => {
		const { movieId } = req.params;
		const {body:movie} = req;
		try {
			const updatedMovie = await moviesService.updatedMovie({ movieId, movie});
			res.status(200).json({
				data: updatedMovie,
				msg: "movies listed"
			})
		} catch(e) {
			next(e);
		}
	});

	router.delete("/:id", async (req, res, next) => {
		const { movieId } = req.params;
		try {
			const deletedMovie = await moviesService.deleteMovie({ movieId });
			res.status(200).json({
				data: deletedMovie,
				msg: "movie deleted"
			})
		} catch(e) {
			next(e);
		}
	});
}

module.exports = moviesAPI;