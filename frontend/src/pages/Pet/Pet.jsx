import React, { useState } from 'react';

function Pet() {
  const [formData, setFormData] = useState({
    nome: '',
    raca: '',
    porte: '',
    idade: '',
    foto: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  return (
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
        <label className="form-label">Raça</label>
        <input
          type="text"
          name="raca"
          className="form-input"
          placeholder="Raça"
          value={formData.raca}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Porte</label>
        <select name="porte" className="form-select" value={formData.porte} onChange={handleChange}>
          <option value="">Selecione o porte</option>
          <option value="pequeno">Pequeno</option>
          <option value="medio">Médio</option>
          <option value="grande">Grande</option>
        </select>
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
            src={URL.createObjectURL(formData.foto)} // Exibe a foto carregada
            alt="Pet"
          />
        </div>
      )}

      <button type="submit" className="submit-btn">Cadastrar Pet</button>
    </form>
  );

}

export default Pet;
