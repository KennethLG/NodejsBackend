const express = require("express");
const { moviesMock } = require("../utils/mocks/movies");

function moviesAPI(app) {
	const router = express.Router();
	app.use("/api/movies", router);

	router.get("/", async (req, res, next) => {
		try {
			const movies = await Promise.resolve(moviesMock);
			res.status(200).json({
				data: movies,
				msg: "movies listed"
			})
		} catch(e) {
			next(e);
		}
	});

	router.get("/:id", async (req, res, next) => {
		try {
			const movies = await Promise.resolve(moviesMock[0]);
			res.status(200).json({
				data: movies,
				msg: "movies retrieve"
			})
		} catch(e) {
			next(e);
		}
	});

	router.post("/", async (req, res, next) => {
		try {
			const createMovieId = await Promise.resolve(moviesMock[0].id);
			res.status(201).json({
				data: createMovieId,
				msg: "movies created"
			})
		} catch(e) {
			next(e);
		}
	});

	router.put("/:id", async (req, res, next) => {
		try {
			const updatedMovie = await Promise.resolve(moviesMock[0].id);
			res.status(200).json({
				data: updatedMovie,
				msg: "movies listed"
			})
		} catch(e) {
			next(e);
		}
	});

	router.delete("/:id", async (req, res, next) => {
		try {
			const deletedMovie = await Promise.resolve(moviesMock[0].id);
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