import swaggerJsDoc from "swagger-jsdoc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerSpec = swaggerJsDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Sistema de Adoção de Pets",
      version: "1.0.0",
      description: "API para gerenciar pets, adotantes e adoções",
    },
  },
  apis: [
    path.join(__dirname, "/controllers/*.js"),
    path.join(__dirname, "/routes/*.js"),
    path.join(__dirname, "/swagger.js"),
  ],
});

export default swaggerSpec;
