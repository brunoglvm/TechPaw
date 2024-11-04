import prismaClient from "../database/prisma.client.js";

class AdocaoController {
  async criarNovaAdocao(req, res) {}

  async buscarAdocoes(req, res) {
    res.status(200).json({ message: "Rota /adocoes funcionando!" });
  }

  async buscarPorId(req, res) {}

  async atualizarAdocao(req, res) {}

  async deletarAdocao(req, res) {}
}

export default AdocaoController;
