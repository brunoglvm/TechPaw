import Joi from "joi";

const adotanteValidator = Joi.object({
  nome: Joi.string().min(3).max(100).required().messages({
    "string.min": "O nome deve ter pelo menos 3 caracteres.",
    "string.max": "O nome não pode ter mais de 100 caracteres.",
    "any.required": "O nome é obrigatório.",
    "string.empty": "O campo nome não pode estar vazio.",
  }),

  email: Joi.string().email().required().messages({
    "string.email": "O email deve ser válido.",
    "any.required": "O email é obrigatório.",
    "string.empty": "O campo email não pode estar vazio.",
  }),

  telefone: Joi.string()
    .min(10)
    .max(15)
    .required()
    .pattern(/^\(\d{2}\)\s?\d{4,5}\-\d{4}$/)
    .messages({
      "string.min": "O telefone deve ter pelo menos 10 números.",
      "string.max": "O telefone não pode ter mais de 15 números.",
      "string.pattern.base":
        "O telefone deve estar no formato (XX) XXXXX-XXXX.",
      "any.required": "O telefone é obrigatório.",
      "string.empty": "O campo telefone não pode estar vazio.",
    }),

  endereco: Joi.string().required().messages({
    "any.required": "O endereço é obrigatório.",
    "string.empty": "O campo endereço não pode estar vazio.",
  }),
});

export default adotanteValidator;
