import { Router } from "express";
import AdotanteController from "../controllers/adotante.controller.js";

const router = Router();
const adotanteController = new AdotanteController();

router.post("/", adotanteController.criarNovoAdotante);
router.get("/", adotanteController.buscarAdotantes);
router.get("/:id", adotanteController.buscarPorId);
router.put("/:id", adotanteController.atualizarAdotante);
router.delete("/:id", adotanteController.deletarAdotante);

export default router;
