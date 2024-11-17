import api from "./api";

export const buscarAdocoes = async () => {
  try {
    const res = await api.get("/adocoes");
    return res.data;
  } catch (error) {
    console.error("Erro ao buscar adocoes:", error);
    throw error;
  }
};
