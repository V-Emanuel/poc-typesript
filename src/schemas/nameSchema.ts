import Joi from "joi";

export const nameSchemma = Joi.object({
  name: Joi.string().required()
});