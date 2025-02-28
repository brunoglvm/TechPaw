import React, { useState } from "react";
import styles from "./pet.module.css";

import { Header } from "@/components/Header/header";
import { RouteBtn } from "@/components/RouteBtn/route-btn";

function Pet({ onAddPet, pets = [] }) {
  const [formData, setFormData] = useState({
    nome: "",
    especie: "",
    idade: "",
    descricao: "",
    foto: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPet = {
      ...formData,
      id: Date.now(), // Gera um ID único baseado no timestamp
      foto: formData.foto ? URL.createObjectURL(formData.foto) : null,
      disponivel: true, // Marca o pet como disponível ao ser cadastrado
    };
    onAddPet(newPet); // Passa o novo pet para o componente pai
    setFormData({
      nome: "",
      especie: "",
      idade: "",
      descricao: "",
      foto: null,
    });
  };

  const handleChange = (e) => {
    const value = e.target.type === "file" ? e.target.files[0] : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const petsDisponiveis = pets.filter((pet) => pet.disponivel === true); // Filtra os pets disponíveis

  return (
    <div>
      <Header />
      <form className={styles.petForm} onSubmit={handleSubmit}>
        <h2 className={styles.petFormTitle}>Cadastro de Pet</h2>

        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.formLabel}>
            Nome
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className={styles.formInput}
            placeholder="Insira o nome do pet"
            value={formData.nome}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="species" className={styles.formLabel}>
            Espécie
          </label>
          <input
            type="text"
            name="species"
            id="species"
            placeholder="Insira a espécie do pet"
            value={formData.especie}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="age" className={styles.formLabel}>
            Idade
          </label>
          <input
            type="number"
            name="age"
            id="age"
            placeholder="Insira a idade do pet"
            value={formData.idade}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.formLabel}>
            Descrição
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="Insira a descrição do pet"
            value={formData.descricao}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="photo" className={styles.formLabel}>
            Foto
          </label>
          <input
            type="file"
            name="photo"
            id="photo"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        {formData.foto && (
          <div className={styles.formGroup}>
            <h3 className={styles.photoTitle}>Foto do Pet:</h3>
            <img
              className={styles.petPhoto}
              src={URL.createObjectURL(formData.foto)}
              alt="Pet"
            />
          </div>
        )}

        <button type="submit" className={styles.submitBtn}>
          Cadastrar Pet
        </button>
      </form>

      {/* Animais Disponíveis */}
      <section className={styles.animaisDisponiveis}>
        <h2 className={styles.sectionTitle}>Animais Disponíveis para Adoção</h2>
        <div className={styles.animaisGrid}>
          {petsDisponiveis.length > 0 ? (
            petsDisponiveis.map((pet) => (
              <div key={pet.id} className={styles.animalCard}>
                <img
                  src={pet.foto}
                  alt={pet.nome}
                  className={styles.animalImage}
                />
                <h3>{pet.nome}</h3>
                <p>Idade: {pet.idade} anos</p>
                <p>Raça: {pet.raca}</p>
                <p>Porte: {pet.porte}</p>
                <RouteBtn to={"/adocao"}>Mais detalhes</RouteBtn>
              </div>
            ))
          ) : (
            <p>Não há animais disponíveis no momento.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Pet;
