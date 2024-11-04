import prismaClient from "../database/prisma.client.js";

class AdotanteController {
  async criarNovoAdotante(req, res) {}

  async buscarAdotantes(req, res) {
    res.status(200).json({ message: "Rota /adotantes funcionando!" });
  }

  async buscarPorId(req, res) {}

  async atualizarAdotante(req, res) {}

  async deletarAdotante(req, res) {}
}

export default AdotanteController;
