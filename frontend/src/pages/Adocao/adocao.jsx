import React, { useState, useEffect } from "react";
import styles from "./adocao.module.css";

import maxImage from "@/assets/max.jpg";
import miaImage from "@/assets/mia.jpg";
import miloImage from "@/assets/milo.jpg";
import charlieImage from "@/assets/charlie.jpg";
import tomImage from "@/assets/tom.jpg";
import lunaImage from "@/assets/luna.jpg";
import simbaImage from "@/assets/simba.jpg";
import rexImage from "@/assets/rex.jpg";
import bellaImage from "@/assets/bella.jpg";
import fifiImage from "@/assets/fifi.jpg";

import { Header } from "@/components/Header/header";

const buscarPets = async (filters) => {
  const pets = [
    {
      id: 1,
      nome: "Rex",
      raca: "Labrador",
      porte: "Médio",
      idade: 3,
      sexo: "Macho",
      especie: "Cachorro",
      foto: rexImage,
    },
    {
      id: 2,
      nome: "Fifi",
      raca: "Poodle",
      porte: "Pequeno",
      idade: 2,
      sexo: "Fêmea",
      especie: "Cachorro",
      foto: fifiImage,
    },
    {
      id: 3,
      nome: "Milo",
      raca: "Pug",
      porte: "Médio",
      idade: 4,
      sexo: "Macho",
      especie: "Cachorro",
      foto: miloImage,
    },
    {
      id: 4,
      nome: "Luna",
      raca: "Persa",
      porte: "Pequeno",
      idade: 1,
      sexo: "Fêmea",
      especie: "Gato",
      foto: lunaImage,
    },
    {
      id: 5,
      nome: "Simba",
      raca: "Siamês",
      porte: "Médio",
      idade: 2,
      sexo: "Macho",
      especie: "Gato",
      foto: simbaImage,
    },
    {
      id: 6,
      nome: "Bella",
      raca: "Golden Retriever",
      porte: "Grande",
      idade: 5,
      sexo: "Fêmea",
      especie: "Cachorro",
      foto: bellaImage,
    },
    {
      id: 7,
      nome: "Tom",
      raca: "Maine Coon",
      porte: "Grande",
      idade: 3,
      sexo: "Macho",
      especie: "Gato",
      foto: tomImage,
    },
    {
      id: 8,
      nome: "Max",
      raca: "Rottweiler",
      porte: "Grande",
      idade: 6,
      sexo: "Macho",
      especie: "Cachorro",
      foto: maxImage,
    },
    {
      id: 9,
      nome: "Mia",
      raca: "Sphynx",
      porte: "Pequeno",
      idade: 1,
      sexo: "Fêmea",
      especie: "Gato",
      foto: miaImage,
    },
    {
      id: 10,
      nome: "Charlie",
      raca: "Bulldog",
      porte: "Médio",
      idade: 4,
      sexo: "Macho",
      especie: "Cachorro",
      foto: charlieImage,
    },
  ];

  if (filters) {
    return pets.filter(
      (pet) =>
        (!filters.porte || pet.porte === filters.porte) &&
        (!filters.sexo || pet.sexo === filters.sexo) &&
        (!filters.idade || pet.idade === parseInt(filters.idade, 10)) &&
        (!filters.especie || pet.especie === filters.especie)
    );
  }

  return pets;
};

function Adocao() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({
    porte: "",
    sexo: "",
    idade: "",
    especie: "",
  });

  useEffect(() => {
    const fetchPets = async () => {
      const data = await buscarPets(filters);
      setPets(data);
    };

    fetchPets();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div>
      <Header />
      {/* Filtros */}
      <div className={styles.filtroContainer}>
        <h3>Filtrar Pets</h3>
        <form>
          <label>
            Porte:
            <select
              name="porte"
              value={filters.porte}
              onChange={handleFilterChange}
            >
              <option value="">Selecione</option>
              <option value="Pequeno">Pequeno</option>
              <option value="Médio">Médio</option>
              <option value="Grande">Grande</option>
            </select>
          </label>

          <label>
            Sexo:
            <select
              name="sexo"
              value={filters.sexo}
              onChange={handleFilterChange}
            >
              <option value="">Selecione</option>
              <option value="Macho">Macho</option>
              <option value="Fêmea">Fêmea</option>
            </select>
          </label>

          <label>
            Idade:
            <input
              type="number"
              name="idade"
              value={filters.idade}
              onChange={handleFilterChange}
              placeholder="Idade"
            />
          </label>

          <label>
            Espécie:
            <select
              name="especie"
              value={filters.especie}
              onChange={handleFilterChange}
            >
              <option value="">Selecione</option>
              <option value="Cachorro">Cachorro</option>
              <option value="Gato">Gato</option>
            </select>
          </label>
        </form>
      </div>

      {/* Lista de Pets */}
      <h2>Pets Disponíveis para Adoção</h2>
      <div className={styles.petsContainer}>
        <ul>
          {pets.map((pet) => (
            <li key={pet.id} className={styles.petCard}>
              <img
                src={pet.foto || "https://via.placeholder.com/150"}
                alt={pet.nome}
                className={styles.petImage}
              />
              <div className={styles.petInfo}>
                <h3>{pet.nome}</h3>
                <p>Raça: {pet.raca}</p>
                <p>Porte: {pet.porte}</p>
                <p>Idade: {pet.idade} anos</p>
                <button>Quero Adotar</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Adocao;
