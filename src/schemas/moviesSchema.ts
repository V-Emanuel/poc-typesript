import Joi from "joi";

export const moviesSchemma = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  release: Joi.date().iso().messages({'date.format': `Date format is YYYY-MM-DD`}).required(),
});
