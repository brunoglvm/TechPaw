import React, { useState, useEffect } from "react";

import auroraImage from "../../assets/aurora.jpg";
import bruceImage from "../../assets/bruce.jpg";
import floquinhoImage from "../../assets/floquinho.jpg";
import lukeImage from "../../assets/luke.jpg";
import marleyImage from "../../assets/marley.jpg";
import selinaImage from "../../assets/selina.jpg";

function Historico() {
  const adotados = [
    // { id: 1, nome: 'Rex', raca: 'Labrador', porte: 'Médio', idade: 3, sexo: 'Macho', tipo: 'Cachorro', foto: rexImage },
    {
      id: 1,
      nome: "Aurora",
      especie: "Gato",
      idade: 1,
      sexo: "Fêmea",
      foto: auroraImage,
      data: "10-05-2024",
    },
    {
      id: 2,
      nome: "Bruce",
      especie: "Cachorro",
      idade: 3,
      sexo: "Macho",
      foto: bruceImage,
      data: "12-09-2024",
    },
    {
      id: 3,
      nome: "Floquinho",
      especie: "Gato",
      idade: 1,
      sexo: "Macho",
      foto: floquinhoImage,
      data: "04-07-2024",
    },
    {
      id: 4,
      nome: "Luke",
      especie: "Cachorro",
      idade: 2,
      sexo: "Macho",
      foto: lukeImage,
      data: "29-08-2024",
    },
    {
      id: 5,
      nome: "Marley",
      especie: "Cachorro",
      idade: 1,
      sexo: "Macho",
      foto: marleyImage,
      data: "18-10-2024",
    },
    {
      id: 6,
      nome: "Selina",
      especie: "Gato",
      idade: 4,
      sexo: "Fêmea",
      foto: selinaImage,
      data: "09-02-2024",
    },
  ];

  // Calcula o número ideal de colunas (3 ou 4, por exemplo)
  const columnCount =
    adotados.length <= 6 ? 3 : Math.ceil(Math.sqrt(adotados.length));

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
    gap: "5rem 2rem",
    padding: "4rem 15rem",
    justifyItems: "center",
    width: "100%",
    maxWidth: "100%",
    marginLeft: "0rem",
  };

  return (
    <div style={{ marginTop: "6rem" }}>
      <h3>
        Aqui no TechPaw, trabalhamos todos os dias para encontrar lares amorosos
        para os animais que resgatamos. <br />
        Veja quem ja encontrou um lar! Conheça alguns dos nossos animais
        adotados:
      </h3>
      <div style={gridStyle} className="pets-container">
        {adotados.map((adotado) => (
          <div key={adotado.id} className="pet-card">
            <img
              src={adotado.foto || "https://via.placeholder.com/150"}
              alt={adotado.nome}
              className="pet-image"
            />
            <div className="pet-info">
              <h3>{adotado.nome}</h3>
              <p>Especie: {adotado.especie}</p>
              <p>Sexo: {adotado.sexo}</p>
              <p>Idade: {adotado.idade} anos</p>
              <p className="data-adocao">Data da Adoção: {adotado.data} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Historico;
