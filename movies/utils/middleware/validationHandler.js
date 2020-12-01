const boom = require("@hapi/boom");
const joi = require("joi");
const {movieIdSchema} = require("../schemas/movies");

function validate(data, schema) {
	if (data.movieId) data = data.movieId;
	return joi.assert(data, schema);
}

function validationHandler(schema, check = "body") {
	return function(req, res, next) {
		const error = validate(req[check], schema);
		error ? next(boom.badRequest(error)): next();
	};
}

module.exports = validationHandler;