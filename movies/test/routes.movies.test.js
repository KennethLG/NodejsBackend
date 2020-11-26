const assert = require("assert");
const proxyquire = require("proxyquire");

const {moviesMock, MoviesServiceMock} = require("../utils/mocks/movies.js");
const testServer = require("../utils/testServer");

describe("routes - movies", ()=> {
	const route = proxyquire("../routes/movies", {
		"../services/movies": MoviesServiceMock
	});

	const request = testServer(route);

	describe("GET /movies", ()=> {
		it("should response with status 200", (done)=> {
			request.get("/api/movies").expect(200, done);
		});

		it("should respond with the list of movies", (done)=> {
			request.get("/api/movies").end((err, res) => {
				assert.deepEqual(res.body, {
					data: moviesMock,
					msg: "movies listed"
				});
				done();
			})
		})
	});
})