import { Router } from "express";
import AdocaoController from "../controllers/adocao.controller.js";

const router = Router();
const adocaoController = new AdocaoController();

/**
 * @swagger
 * /api/v1/adocoes:
 *   post:
 *     summary: Criar nova adoção
 *     description: Cria uma nova adoção no sistema.
 *     tags:
 *       - Adoções
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pet_id:
 *                 type: string
 *               adotante_id:
 *                 type: string
 *               data_adocao:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Adoção criada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 pet_id:
 *                   type: string
 *                 adotante_id:
 *                   type: string
 *                 data_adocao:
 *                   type: string
 *                   format: date
 *       404:
 *         description: Pet ou adotante não encontrado.
 *       500:
 *         description: Erro ao cadastrar a adoção.
 */
router.post("/", adocaoController.criarNovaAdocao);

/**
 * @swagger
 * /api/v1/adocoes:
 *   get:
 *     summary: Buscar todas as adoções
 *     description: Retorna todas as adoções registradas no sistema.
 *     tags:
 *       - Adoções
 *     responses:
 *       200:
 *         description: Lista de adoções.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   pet_id:
 *                     type: string
 *                   adotante_id:
 *                     type: string
 *                   data_adocao:
 *                     type: string
 *                     format: date
 *       404:
 *         description: Nenhuma adoção encontrada.
 *       500:
 *         description: Erro ao buscar as adoções.
 */
router.get("/", adocaoController.buscarAdocoes);

/**
 * @swagger
 * /api/v1/adocoes/{id}:
 *   get:
 *     summary: Buscar adoção por ID
 *     description: Retorna os detalhes de uma adoção específica com base no ID fornecido.
 *     tags:
 *       - Adoções
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da adoção a ser buscada.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Adoção encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 pet_id:
 *                   type: string
 *                 adotante_id:
 *                   type: string
 *                 data_adocao:
 *                   type: string
 *                   format: date
 *       404:
 *         description: Adoção não encontrada.
 *       500:
 *         description: Erro ao buscar a adoção.
 */
router.get("/:id", adocaoController.buscarPorId);

/**
 * @swagger
 * /api/v1/adocoes/{id}:
 *   patch:
 *     summary: Atualizar adoção por ID
 *     description: Atualiza os dados de uma adoção específica com base no ID fornecido.
 *     tags:
 *       - Adoções
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da adoção a ser atualizada.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pet_id:
 *                 type: string
 *               adotante_id:
 *                 type: string
 *               data_adocao:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Adoção atualizada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 pet_id:
 *                   type: string
 *                 adotante_id:
 *                   type: string
 *                 data_adocao:
 *                   type: string
 *                   format: date
 *       400:
 *         description: Solicitação inválida.
 *       404:
 *         description: Adoção não encontrada.
 *       500:
 *         description: Erro ao atualizar a adoção.
 */
router.patch("/:id", adocaoController.atualizarAdocao);

/**
 * @swagger
 * /api/v1/adocoes/{id}:
 *   delete:
 *     summary: Deletar adoção por ID
 *     description: Deleta uma adoção específica com base no ID fornecido.
 *     tags:
 *       - Adoções
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da adoção a ser deletada.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Adoção deletada com sucesso.
 *       404:
 *         description: Adoção não encontrada.
 *       500:
 *         description: Erro ao deletar a adoção.
 */
router.delete("/:id", adocaoController.deletarAdocao);

export default router;
