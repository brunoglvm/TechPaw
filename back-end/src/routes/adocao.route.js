import { Router } from "express";
import AdocaoController from "../controllers/adocao.controller.js";

const router = Router();
const adocaoController = new AdocaoController();

router.post("/", adocaoController.criarNovaAdocao);
router.get("/", adocaoController.buscarAdocoes);
router.get("/:id", adocaoController.buscarPorId);
router.put("/:id", adocaoController.atualizarAdocao);
router.delete("/:id", adocaoController.deletarAdocao);

export default router;
