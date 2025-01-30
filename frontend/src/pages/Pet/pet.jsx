import React, { useState } from "react";
import styles from "./pet.module.css";
import { Header } from "@/components/Header/header";

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
          <label className={styles.formLabel}>Nome do Pet</label>
          <input
            type="text"
            name="nome"
            className={styles.formInput}
            placeholder="Nome do Pet"
            value={formData.nome}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Espécie</label>
          <input
            type="text"
            name="especie"
            placeholder="Espécie"
            value={formData.especie}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Idade</label>
          <input
            type="number"
            name="idade"
            placeholder="Idade"
            value={formData.idade}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="descricao">
            Descrição
          </label>
          <textarea
            name="descricao"
            id="descricao"
            placeholder="Descrição"
            value={formData.descricao}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Foto</label>
          <input
            type="file"
            name="foto"
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
                <a href={`/adocao/`} className={styles.linkDetalhes}>
                  Mais detalhes
                </a>
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
