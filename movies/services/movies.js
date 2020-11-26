const MongoLib = require("../lib/mongo");

class MoviesService {

	constructor() {
		this.collection = "games";
		this.mongodb = new MongoLib();
	}

	async getMovies({ tags }) {
		const query = tags && { tags:{ $in: tags}};
		const movies = this.mongodb.getAll(this.collection, query);
		return movies || [];
	}

	async getMovie({movieId}) {
		const movie = this.mongodb.get(this.collection, movieId);
		return movie || {};
	}

	async createMovie({movie}) {
		const createMovieId = this.mongodb.create(this.collection, movie);
		return createMovieId;
	}

	async updateMovie({movieId, movie}) {
		const updateMovieId = this.mongodb.update(this.collection, movieId, movie);
		return updateMovieId;
	}

	async deleteMovie({ movieId }) {
		const deletedMovieId = this.mongodb.delete(this.collection, movieId);
		return deletedMovieId;
	}
}

module.exports = MoviesService;