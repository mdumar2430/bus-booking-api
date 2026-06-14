import Joi from "joi";

export const loginSchema = Joi.object({
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
  params: Joi.object().optional(),
  query: Joi.object().optional(),
});