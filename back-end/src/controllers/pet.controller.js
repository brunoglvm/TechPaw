import prismaClient from "../database/prisma.client.js";

class PetController {
  async criarNovoPet(req, res) {}

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

  async buscarPorId(req, res) {}

  async atualizarPet(req, res) {}

  async deletarPet(req, res) {}
}

export default PetController;
