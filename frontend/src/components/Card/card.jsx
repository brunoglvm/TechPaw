import { useState, useEffect } from "react";
import { buscarAdotantes } from "../../services/api/adotante-api";
import "./card.css";

export function Card() {
  const [adotantes, setAdotantes] = useState([]);

  useEffect(() => {
    const listarAdotantes = async () => {
      try {
        const data = await buscarAdotantes();
        setAdotantes(data);
      } catch (error) {
        console.error("Erro ao buscar adotantes:", error);
      }
    };

    listarAdotantes();
  }, []);

  return (
    <div>
      <h1 className="test">TechPaw</h1>
      <ul>
        {adotantes.map((adotante, index) => (
          <li key={index}>{adotante.email}</li>
        ))}
      </ul>
    </div>
  );
}
