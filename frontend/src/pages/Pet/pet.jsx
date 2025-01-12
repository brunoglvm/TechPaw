import React, { useState } from "react";
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
      <form className="pet-form" onSubmit={handleSubmit}>
        <h2 className="pet-form-title">Cadastro de Pet</h2>

        <div className="form-group">
          <label className="form-label">Nome do Pet</label>
          <input
            type="text"
            name="nome"
            className="form-input"
            placeholder="Nome do Pet"
            value={formData.nome}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Espécie</label>
          <input
            type="text"
            name="especie"
            className="form-input"
            placeholder="Espécie"
            value={formData.especie}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Idade</label>
          <input
            type="number"
            name="idade"
            className="form-input"
            placeholder="Idade"
            value={formData.idade}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="raca">
            Descrição
          </label>
          <textarea
            name="raca"
            id="raca"
            className="form-input"
            placeholder="Raça"
            value={formData.raca}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>

        <div className="form-group">
          <label className="form-label">Foto</label>
          <input
            type="file"
            name="foto"
            className="form-file"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        {formData.foto && (
          <div className="form-group">
            <h3 className="photo-title">Foto do Pet:</h3>
            <img
              className="pet-photo"
              src={URL.createObjectURL(formData.foto)}
              alt="Pet"
            />
          </div>
        )}

        <button type="submit" className="submit-btn">
          Cadastrar Pet
        </button>
      </form>

      {/* Animais Disponíveis */}
      <section className="animais-disponiveis">
        <h2 className="section-title">Animais Disponíveis para Adoção</h2>
        <div className="animais-grid">
          {petsDisponiveis.length > 0 ? (
            petsDisponiveis.map((pet) => (
              <div key={pet.id} className="animal-card">
                <img src={pet.foto} alt={pet.nome} className="animal-image" />
                <h3>{pet.nome}</h3>
                <p>Idade: {pet.idade} anos</p>
                <p>Raça: {pet.raca}</p>
                <p>Porte: {pet.porte}</p>
                <a href={`/adocao/`} className="link-detalhes">
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
