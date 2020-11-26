const express = require("express");
const MoviesService = require("../services/movies");

const {charIdSchema, createCharSchema, updateCharSchema} = require("../utils/schemas/movies");
const validationHandler = require("../utils/middleware/validationHandler");

function moviesAPI(app) {
	const router = express.Router();
	app.use("/api/movies", router);

	const moviesService = new MoviesService();

	router.get("/", async (req, res, next) => {
		const {tags} = req.query;
		try {
			//throw new Error("error");
			const movies = await moviesService.getMovies({ tags});
			res.status(200).json({
				data: movies,
				msg: "movies listed"
			})
		} catch(e) {
			next(e);
		}
	});

	router.get("/:movieId", validationHandler({ movieId: charIdSchema}, "params"), async (req, res, next) => {
		const { movieId } = req.params;
		try {
			const movies = await moviesService.getMovie({ movieId});
			res.status(200).json({
				data: movies,
				msg: "movie retrieve"
			})
		} catch(e) {
			next(e);
		}
	});

	router.post("/", validationHandler(createCharSchema), async (req, res, next) => {
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

	router.put("/:movieId", validationHandler({ movieId: charIdSchema}, "params"), validationHandler(updateCharSchema), async (req, res, next) => {
		const { movieId } = req.params;
		const {body:movie} = req;
		try {
			const updatedMovie = await moviesService.updateMovie({ movieId, movie});
			res.status(200).json({
				data: updatedMovie,
				msg: "movie updated"
			})
		} catch(e) {
			next(e);
		}
	});

	router.delete("/:movieId", validationHandler({ movieId: charIdSchema}, "params"), async (req, res, next) => {
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