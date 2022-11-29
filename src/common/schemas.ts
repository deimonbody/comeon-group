import joi from 'joi';

export const loginSchema = joi.object({
  username: joi
    .string()
    .max(15)
    .message('The name should be max 15 symbols')
    .min(3)
    .message('The name should be min 3 symbols')
    .required(),
  password: joi
    .string()
    .max(15)
    .message('The password should be max 15 symbols')
    .min(3)
    .message('The password should be min 3 symbols')
    .required(),
});
