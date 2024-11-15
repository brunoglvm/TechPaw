import express from "express";
import cors from "cors";
import helmet from "helmet";
import routes from "./routes/index.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
  // Rotas disponíveis: /api/adocoes, /api/adotantes, /api/pets
});
