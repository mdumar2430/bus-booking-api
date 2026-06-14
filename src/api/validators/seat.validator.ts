import Joi from "joi";

export const getSeatSchema = Joi.object({
  params: Joi.object({
    seatNumber: Joi.number().integer().min(1).max(40).required(),
  }),
  body: Joi.object().optional(),
  query: Joi.object().optional(),
});

export const getSeatsByStatusSchema = Joi.object({
  params: Joi.object({
    status: Joi.string().valid("OPEN", "CLOSED", "open", "closed").required(),
  }),
  body: Joi.object().optional(),
  query: Joi.object().optional(),
});

export const bookSeatSchema = Joi.object({
  params: Joi.object({
    seatNumber: Joi.number().integer().min(1).max(40).required(),
  }),
  body: Joi.object({
    passengerName: Joi.string().required(),
    passengerEmail: Joi.string().email().required(),
  }),
  query: Joi.object().optional(),
});
