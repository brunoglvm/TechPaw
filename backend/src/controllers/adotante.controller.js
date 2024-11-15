import prismaClient from "../database/prisma.client.js";
import adotanteValidator from "../validators/adotante.validator.js";

class AdotanteController {
  async criarNovoAdotante(req, res) {
    try {
      const { nome, email, telefone, endereco } = req.body;

      const { error } = adotanteValidator.validate(req.body, {
        abortEarly: false,
      });
      if (error) {
        const errorMsg = error.details.map((detail) => ({
          mensagem: detail.message,
        }));
        return res.status(400).json({
          mensagem: "Erro de validação.",
          [errorMsg.length > 1 ? "erros" : "erro"]: errorMsg,
        });
      }

      const adotanteDuplicado = await prismaClient.adotantes.findUnique({
        where: {
          email,
        },
      });
      if (adotanteDuplicado) {
        return res.status(400).json({
          mensagem: "Erro de validação.",
          erro: [{ mensagem: "O email já está em uso." }],
        });
      }

      const novoAdotante = await prismaClient.adotantes.create({
        data: {
          nome,
          email,
          telefone,
          endereco,
        },
      });
      return res.status(201).json(novoAdotante);
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao cadastrar o adotante.",
      });
    }
  }

  async buscarAdotantes(req, res) {
    try {
      const adotantes = await prismaClient.adotantes.findMany();

      if (adotantes.length === 0) {
        return res.status(404).json({
          message: "Nenhum adotante cadastrado.",
        });
      }
      return res.status(200).json(adotantes);
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao buscar os adotantes.",
      });
    }
  }

  async buscarPorId(req, res) {
    const { id } = req.params;

    try {
      const adotante = await prismaClient.adotantes.findUnique({
        where: { id },
      });

      if (!adotante) {
        return res.status(404).json({
          message: "Adotante não encontrado.",
        });
      }
      return res.status(200).json(adotante);
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao buscar o adotante.",
      });
    }
  }

  async atualizarAdotante(req, res) {
    const { id } = req.params;

    try {
      const { nome, email, telefone, endereco } = req.body;

      const adotante = await prismaClient.adotantes.findUnique({
        where: { id },
      });
      if (!adotante) {
        return res.status(404).json({
          message: "Adotante não encontrado.",
        });
      }

      const { error } = adotanteValidator.validate(req.body, {
        abortEarly: false,
      });
      if (error) {
        const errorMsg = error.details.map((detail) => ({
          mensagem: detail.message,
        }));
        return res.status(400).json({
          mensagem: "Erro de validação.",
          [errorMsg.length > 1 ? "erros" : "erro"]: errorMsg,
        });
      }

      const adotanteDuplicado = await prismaClient.adotantes.findUnique({
        where: {
          email,
        },
      });
      if (adotanteDuplicado && adotanteDuplicado.id !== id) {
        return res.status(400).json({
          mensagem: "Erro de validação.",
          erro: [{ mensagem: "O email já está em uso." }],
        });
      }

      const adotanteAtualizado = await prismaClient.adotantes.update({
        where: { id },
        data: {
          nome,
          email,
          telefone,
          endereco,
        },
      });
      return res.status(200).json(adotanteAtualizado);
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao atualizar o adotante.",
      });
    }
  }

  async deletarAdotante(req, res) {
    const { id } = req.params;

    try {
      const adotante = await prismaClient.adotantes.findUnique({
        where: { id },
      });

      if (!adotante) {
        return res.status(404).json({
          message: "Adotante não encontrado.",
        });
      }

      await prismaClient.adotantes.delete({
        where: { id },
      });
      return res.status(200).json({
        message: "Adotante deletado com sucesso!",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao deletar o adotante.",
      });
    }
  }
}

export default AdotanteController;
