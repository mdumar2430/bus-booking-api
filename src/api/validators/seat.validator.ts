import Joi from "joi";

export const getSeatSchema = Joi.object({
  params: Joi.object({
    seatNumber: Joi.number().integer().min(1).max(40).required(),
  }),
});

export const getSeatsByStatusSchema = Joi.object({
  params: Joi.object({
    status: Joi.string().valid("OPEN", "CLOSED", "open", "closed").required(),
  }),
});
