import prismaClient from "../database/prisma.client.js";
import petValidator from "../validators/pet.validator.js";

class PetController {
  async criarNovoPet(req, res) {
    try {
      const { nome, especie, idade, descricao, status } = req.body;

      const { error } = petValidator.validate(req.body, {
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

      const novoPet = await prismaClient.pets.create({
        data: {
          nome,
          especie,
          idade,
          descricao,
          status,
        },
      });
      return res.status(201).json(novoPet);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Erro ao cadastrar o pet.",
      });
    }
  }

  async buscarPets(req, res) {
    try {
      const pets = await prismaClient.pets.findMany();

      if (pets.length === 0) {
        return res.status(404).json({
          message: "Nenhum pet cadastrado.",
        });
      }
      return res.status(200).json(pets);
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao buscar os pets.",
      });
    }
  }

  async buscarPorId(req, res) {
    const { id } = req.params;

    try {
      const pet = await prismaClient.pets.findUnique({
        where: { id },
      });

      if (!pet) {
        return res.status(404).json({
          message: "Pet não encontrado.",
        });
      }
      return res.status(200).json(pet);
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao buscar o pet.",
      });
    }
  }

  async atualizarPet(req, res) {
    const { id } = req.params;

    try {
      const { nome, especie, idade, descricao, status } = req.body;

      const { error } = petValidator.validate(req.body, {
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

      const pet = await prismaClient.pets.findUnique({
        where: { id },
      });
      if (!pet) {
        return res.status(404).json({
          message: "Pet não encontrado.",
        });
      }

      const petAtualizado = await prismaClient.pets.update({
        where: { id },
        data: {
          nome,
          especie,
          idade,
          descricao,
          status,
        },
      });
      return res.status(200).json(petAtualizado);
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao atualizar o pet.",
      });
    }
  }

  async deletarPet(req, res) {
    const { id } = req.params;

    try {
      const pet = await prismaClient.pets.findUnique({
        where: { id },
      });

      if (!pet) {
        return res.status(404).json({
          message: "Pet não encontrado.",
        });
      }

      await prismaClient.pets.delete({
        where: { id },
      });
      return res.status(200).json({
        message: "Pet deletado com sucesso!",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao deletar o pet.",
      });
    }
  }
}

export default PetController;
