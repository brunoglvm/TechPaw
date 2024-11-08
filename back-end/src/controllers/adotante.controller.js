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

  async atualizarAdotante(req, res) {}

  async deletarAdotante(req, res) {}
}

export default AdotanteController;
