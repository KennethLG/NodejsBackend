const sinon = require("sinon");

const { moviesMock, filteredMoviesMocks } = require("./movies");

const getAllStub = sinon.stub();
getAllStub.withArgs("movies").resolves(moviesMock);

const tagQuery = {tags: {$in: ["Drama"]}};
getAllStub.withArgs("movies", tagQuery).resolves(filteredMoviesMocks("comedy"));

const createStub = sinon.stub().resolves(moviesMock[0]._id);

class MongoLibMock {
	getAll(collection, query) {
		return getAllStub(collection, query);
	}

	create(collection, data) {
		return createStub(collection, data);
	}
}

module.exports = {
	getAllStub,
	createStub,
	MongoLibMock
}