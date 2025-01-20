import { Router } from "express";
import AdotanteController from "../controllers/adotante.controller.js";

const router = Router();
const adotanteController = new AdotanteController();

/**
 * @swagger
 * /api/v1/adotantes:
 *   post:
 *     summary: Criar novo adotante
 *     description: Registra um novo adotante no sistema.
 *     tags:
 *       - Adotantes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               telefone:
 *                 type: string
 *               endereco:
 *                 type: string
 *     responses:
 *       201:
 *         description: Adotante criado com sucesso.
 *       400:
 *         description: Erro de validação ou email já em uso.
 *       500:
 *         description: Erro ao cadastrar o adotante.
 */
router.post("/", adotanteController.criarNovoAdotante);

/**
 * @swagger
 * /api/v1/adotantes:
 *   get:
 *     summary: Listar adotantes
 *     description: Retorna a lista de todos os adotantes cadastrados.
 *     tags:
 *       - Adotantes
 *     responses:
 *       200:
 *         description: Lista de adotantes.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   nome:
 *                     type: string
 *                   email:
 *                     type: string
 *                   telefone:
 *                     type: string
 *                   endereco:
 *                     type: string
 *       404:
 *         description: Nenhum adotante cadastrado.
 *       500:
 *         description: Erro ao buscar os adotantes.
 */
router.get("/", adotanteController.buscarAdotantes);

/**
 * @swagger
 * /api/v1/adotantes/{id}:
 *   get:
 *     summary: Buscar adotante por ID
 *     description: Retorna os detalhes de um adotante específico com base no ID fornecido.
 *     tags:
 *       - Adotantes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do adotante a ser buscado.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalhes do adotante.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 nome:
 *                   type: string
 *                 email:
 *                   type: string
 *                 telefone:
 *                   type: string
 *                 endereco:
 *                   type: string
 *       404:
 *         description: Adotante não encontrado.
 *       500:
 *         description: Erro ao buscar o adotante.
 */
router.get("/:id", adotanteController.buscarPorId);

/**
 * @swagger
 * /api/v1/adotantes/{id}:
 *   put:
 *     summary: Atualizar adotante por ID
 *     description: Atualiza os dados de um adotante específico com base no ID fornecido.
 *     tags:
 *       - Adotantes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do adotante a ser atualizado.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               telefone:
 *                 type: string
 *               endereco:
 *                 type: string
 *     responses:
 *       200:
 *         description: Adotante atualizado com sucesso.
 *       400:
 *         description: Erro de validação ou email já em uso.
 *       404:
 *         description: Adotante não encontrado.
 *       500:
 *         description: Erro ao atualizar o adotante.
 */
router.put("/:id", adotanteController.atualizarAdotante);

/**
 * @swagger
 * /api/v1/adotantes/{id}:
 *   delete:
 *     summary: Deletar adotante por ID
 *     description: Remove um adotante específico com base no ID fornecido.
 *     tags:
 *       - Adotantes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do adotante a ser deletado.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Adotante deletado com sucesso.
 *       404:
 *         description: Adotante não encontrado.
 *       500:
 *         description: Erro ao deletar o adotante.
 */
router.delete("/:id", adotanteController.deletarAdotante);

export default router;
