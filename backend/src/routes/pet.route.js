import { Router } from "express";
import PetController from "../controllers/pet.controller.js";

const router = Router();
const petController = new PetController();

router.post("/", petController.criarNovoPet);
router.get("/", petController.buscarPets);
router.get("/:id", petController.buscarPorId);
router.put("/:id", petController.atualizarPet);
router.delete("/:id", petController.deletarPet);

export default router;
