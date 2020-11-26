const joi = require("joi");

const movieIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const movieNameSchema = joi.string().max(20);
const movieHeightSchema = joi.string().max(4);
const movieGenderSchema = joi.string().max(10);

const createMovieSchema = joi.object({
	name : movieNameSchema.required(),
	height : movieHeightSchema.required(),
	gender : movieGenderSchema.required()
});

const updateMovieSchema = joi.object({
	name : movieNameSchema,
	height : movieHeightSchema,
	gender : movieGenderSchema
});

module.exports = {
	movieIdSchema,
	createMovieSchema,
	updateMovieSchema
};