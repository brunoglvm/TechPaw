import { Router } from "express";
import adocaoRoutes from "./adocao.route.js";
import adotanteRoutes from "./adotante.route.js";
import petRoutes from "./pet.route.js";

const router = Router();

// definindo prefixos para cada grupo de rotas
router.use("/adocoes", adocaoRoutes);
router.use("/adotantes", adotanteRoutes);
router.use("/pets", petRoutes);

export default router;
