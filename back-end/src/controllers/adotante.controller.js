import prismaClient from "../database/prisma.client.js";

class AdotanteController {
  async criarNovoAdotante(req, res) {}

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
        message: "Erro ao buscar adotantes.",
      });
    }
  }

  async buscarPorId(req, res) {}

  async atualizarAdotante(req, res) {}

  async deletarAdotante(req, res) {}
}

export default AdotanteController;
