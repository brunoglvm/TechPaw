import prismaClient from "../database/prisma.client.js";

class AdocaoController {
  async criarNovaAdocao(req, res) {
    try {
      const {
        pet_id: petId,
        adotante_id: adotanteId,
        data_adocao: dataAdocao,
      } = req.body;

      const petInfo = await prismaClient.pets.findUnique({
        where: { id: petId },
      });
      const adotanteInfo = await prismaClient.adotantes.findUnique({
        where: { id: adotanteId },
      });

      if (!petInfo || !adotanteInfo) {
        return res
          .status(404)
          .json({ message: "Pet ou adotante não encontrado." });
      }

      const novaAdocao = await prismaClient.adocoes.create({
        data: {
          pet_id: petId,
          adotante_id: adotanteId,
          data_adocao: new Date(dataAdocao),
        },
      });
      return res.status(201).json(novaAdocao);
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao cadastrar a adoção.",
      });
    }
  }

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
        message: "Erro ao buscar as adoções.",
      });
    }
  }

  async buscarPorId(req, res) {
    const { id } = req.params;

    try {
      const adocao = await prismaClient.adocoes.findUnique({
        where: { id },
        include: {
          pets: true,
          adotantes: true,
        },
      });

      if (!adocao) {
        return res.status(404).json({
          message: "Adoção não encontrada.",
        });
      }
      return res.status(200).json(adocao);
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao buscar a adoção.",
      });
    }
  }

  async atualizarAdocao(req, res) {}

  async deletarAdocao(req, res) {
    const { id } = req.params;

    try {
      const adocao = await prismaClient.adocoes.findUnique({
        where: { id },
      });

      if (!adocao) {
        return res.status(404).json({
          message: "Adoção não encontrada.",
        });
      }

      await prismaClient.adocoes.delete({
        where: { id },
      });
      return res.status(200).json({
        message: "Adoção deletada com sucesso!",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao deletar a adoção.",
      });
    }
  }
}

export default AdocaoController;
