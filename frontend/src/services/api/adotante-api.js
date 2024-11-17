import api from "./api";

export const buscarAdotantes = async () => {
  try {
    const res = await api.get("/adotantes");
    return res.data;
  } catch (error) {
    console.error("Erro ao buscar adotantes:", error);
    throw error;
  }
};
