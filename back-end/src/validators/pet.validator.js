import Joi from "joi";

const petValidator = Joi.object({
  nome: Joi.string().max(100).required().messages({
    "string.max": "O nome não pode ter mais de 100 caracteres.",
    "any.required": "O nome é obrigatório.",
    "string.empty": "O campo nome não pode estar vazio.",
  }),

  especie: Joi.string().max(50).required().messages({
    "string.max": "A espécie não pode ter mais de 50 caracteres.",
    "any.required": "A espécie é obrigatória.",
    "string.empty": "O campo especie não pode estar vazio.",
  }),

  idade: Joi.number().integer().min(0).required().messages({
    "number.integer": "A idade deve ser um número inteiro.",
    "number.min": "A idade não pode ser negativa.",
    "any.required": "A idade é obrigatória.",
    "string.empty": "O campo idade não pode estar vazio.",
  }),

  descricao: Joi.string().max(800).optional().empty("").messages({
    "string.max": "A descrição não pode ter mais de 800 caracteres.",
  }),

  status: Joi.string()
    .max(10)
    .valid("disponível", "adotado")
    .required()
    .messages({
      "string.max": "O status não pode ter mais de 10 caracteres.",
      "any.only": "O status deve ser: 'disponível' ou 'adotado'.",
      "any.required": "O status é obrigatório.",
      "string.empty": "O campo status não pode estar vazio.",
    }),
});

export default petValidator;
