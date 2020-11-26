const joi = require("joi");

const charIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const charNameSchema = joi.string().max(20);
const charHeightSchema = joi.string().max(4);
const charGenderSchema = joi.string().max(10);

const createCharSchema = joi.object({
	name : charNameSchema.required(),
	height : charHeightSchema.required(),
	gender : charGenderSchema.required()
});

const updateCharSchema = joi.object({
	name : charNameSchema,
	height : charHeightSchema,
	gender : charGenderSchema
});

module.exports = {
	charIdSchema,
	createCharSchema,
	updateCharSchema
};