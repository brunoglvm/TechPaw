import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();
const port = 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});
