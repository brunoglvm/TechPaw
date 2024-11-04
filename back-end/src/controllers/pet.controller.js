import prismaClient from "../database/prisma.client.js";

class PetController {
  async criarNovoPet(req, res) {}

  async buscarPets(req, res) {
    res.status(200).json({ message: "Rota /pets funcionando!" });
  }

  async buscarPorId(req, res) {}

  async atualizarPet(req, res) {}

  async deletarPet(req, res) {}
}

export default PetController;
