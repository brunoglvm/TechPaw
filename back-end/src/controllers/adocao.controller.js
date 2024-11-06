import prismaClient from "../database/prisma.client.js";

class AdocaoController {
  async criarNovaAdocao(req, res) {}

  async buscarAdocoes(req, res) {
    try {
      const adocoes = await prismaClient.adocoes.findMany();
      if (adocoes.length === 0) {
        return res.status(404).json({
          message: "Nenhuma adoção cadastrada.",
        });
      }
      return res.status(200).json(adocoes);
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao buscar adoções.",
      });
    }
  }

  async buscarPorId(req, res) {}

  async atualizarAdocao(req, res) {}

  async deletarAdocao(req, res) {}
}

export default AdocaoController;
