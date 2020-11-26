const assert = require("assert");
const proxyquire = require("proxyquire");

const {MongoLibMock, getAllStub} = require("../utils/mocks/mongoLib");
const {moviesMock} = require("../utils/mocks/movies");

describe("services - movies", () => {
	const MoviesServices = proxyquire("../services/movies", {
		"../lib/mongo": MongoLibMock
	});

	const moviesService = new MoviesServices();

	describe("When get movies method is called", async ()=> {
		it("Should call the getAll MongoLib method", async ()=> {
			await moviesService.getMovies({});
			assert.strictEqual(getAllStub.called, true);
		})

		it("Should return aan array of movies", async ()=> {
			const result = await moviesService.getMovies({});
			const expected = moviesMock;
			assert.deepEqual(result, expected);
		})
	})
})