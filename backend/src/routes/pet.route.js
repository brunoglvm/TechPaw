import { Router } from "express";
import PetController from "../controllers/pet.controller.js";

const router = Router();
const petController = new PetController();

/**
 * @swagger
 * /api/v1/pets:
 *   post:
 *     summary: Criar novo pet
 *     description: Registra um novo pet no sistema.
 *     tags:
 *       - Pets
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               especie:
 *                 type: string
 *               idade:
 *                 type: integer
 *               descricao:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [disponível, adotado]
 *     responses:
 *       201:
 *         description: Pet criado com sucesso.
 *       400:
 *         description: Erro de validação.
 *       500:
 *         description: Erro ao cadastrar o pet.
 */
router.post("/", petController.criarNovoPet);

/**
 * @swagger
 * /api/v1/pets:
 *   get:
 *     summary: Listar pets
 *     description: Retorna a lista de todos os pets cadastrados.
 *     tags:
 *       - Pets
 *     responses:
 *       200:
 *         description: Lista de pets.
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
 *                   especie:
 *                     type: string
 *                   idade:
 *                     type: integer
 *                   descricao:
 *                     type: string
 *                   status:
 *                     type: string
 *       404:
 *         description: Nenhum pet cadastrado.
 *       500:
 *         description: Erro ao buscar os pets.
 */
router.get("/", petController.buscarPets);

/**
 * @swagger
 * /api/v1/pets/{id}:
 *   get:
 *     summary: Buscar pet por ID
 *     description: Retorna os detalhes de um pet específico com base no ID fornecido.
 *     tags:
 *       - Pets
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do pet a ser buscado.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalhes do pet.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 nome:
 *                   type: string
 *                 especie:
 *                   type: string
 *                 idade:
 *                   type: integer
 *                 descricao:
 *                   type: string
 *                 status:
 *                   type: string
 *       404:
 *         description: Pet não encontrado.
 *       500:
 *         description: Erro ao buscar o pet.
 */
router.get("/:id", petController.buscarPorId);

/**
 * @swagger
 * /api/v1/pets/{id}:
 *   put:
 *     summary: Atualizar pet por ID
 *     description: Atualiza os dados de um pet específico com base no ID fornecido.
 *     tags:
 *       - Pets
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do pet a ser atualizado.
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
 *               especie:
 *                 type: string
 *               idade:
 *                 type: integer
 *               descricao:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [disponível, adotado]
 *     responses:
 *       200:
 *         description: Pet atualizado com sucesso.
 *       400:
 *         description: Erro de validação.
 *       404:
 *         description: Pet não encontrado.
 *       500:
 *         description: Erro ao atualizar o pet.
 */
router.put("/:id", petController.atualizarPet);

/**
 * @swagger
 * /api/v1/pets/{id}:
 *   delete:
 *     summary: Deletar pet por ID
 *     description: Remove um pet específico com base no ID fornecido.
 *     tags:
 *       - Pets
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do pet a ser deletado.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pet deletado com sucesso.
 *       404:
 *         description: Pet não encontrado.
 *       500:
 *         description: Erro ao deletar o pet.
 */
router.delete("/:id", petController.deletarPet);

export default router;
