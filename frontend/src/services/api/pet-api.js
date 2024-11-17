import api from "./api";

export const buscarPets = async () => {
  try {
    const res = await api.get("/pets");
    return res.data;
  } catch (error) {
    console.error("Erro ao buscar pets:", error);
    throw error;
  }
};
