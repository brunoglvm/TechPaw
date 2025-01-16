import prismaClient from "../database/prisma.client.js";

class AdocaoController {
  async criarNovaAdocao(req, res) {
    try {
      const {
        pet_id: petId,
        adotante_id: adotanteId,
        data_adocao: dataAdocao,
      } = req.body;

      const petInfo = await prismaClient.Pet.findUnique({
        where: { id: petId },
      });
      const adotanteInfo = await prismaClient.Adotante.findUnique({
        where: { id: adotanteId },
      });

      if (!petInfo || !adotanteInfo) {
        return res
          .status(404)
          .json({ message: "Pet ou adotante não encontrado." });
      }

      const novaAdocao = await prismaClient.Adocao.create({
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
      const adocoes = await prismaClient.Adocao.findMany();

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
      const adocao = await prismaClient.Adocao.findUnique({
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

  async atualizarAdocao(req, res) {
    const { id } = req.params;

    try {
      const {
        pet_id: petId,
        adotante_id: adotanteId,
        data_adocao: dataAdocao,
      } = req.body;

      const adocaoExistente = await prismaClient.Adocao.findUnique({
        where: { id },
      });
      if (!adocaoExistente) {
        return res.status(404).json({
          message: "Adoção não encontrada.",
        });
      }

      if (petId) {
        const petInfo = await prismaClient.Pet.findUnique({
          where: { id: petId },
        });
        if (!petInfo) {
          return res.status(404).json({ message: "Pet não encontrado." });
        }
      }

      if (adotanteId) {
        const adotanteInfo = await prismaClient.Adotante.findUnique({
          where: { id: adotanteId },
        });
        if (!adotanteInfo) {
          return res.status(404).json({ message: "Adotante não encontrado." });
        }
      }

      const adocaoAtualizada = await prismaClient.Adocao.update({
        where: { id },
        data: {
          pet_id: petId || adocaoExistente.pet_id,
          adotante_id: adotanteId || adocaoExistente.adotante_id,
          data_adocao: dataAdocao
            ? new Date(dataAdocao)
            : adocaoExistente.data_adocao,
        },
      });
      return res.status(200).json(adocaoAtualizada);
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao atualizar a adoção.",
      });
    }
  }

  async deletarAdocao(req, res) {
    const { id } = req.params;

    try {
      const adocao = await prismaClient.Adocao.findUnique({
        where: { id },
      });

      if (!adocao) {
        return res.status(404).json({
          message: "Adoção não encontrada.",
        });
      }

      await prismaClient.Adocao.delete({
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
