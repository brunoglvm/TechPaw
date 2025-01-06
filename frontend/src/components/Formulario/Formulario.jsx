import React, { useState } from "react";

export function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [nomeError, setNomeError] = useState("");
  const [telefoneError, setTelefoneError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar se o nome contém apenas letras e espaços
    const nomeRegex = /^[A-Za-z\s]+$/;
    if (!nomeRegex.test(nome)) {
      setNomeError("O nome deve conter apenas letras e espaços.");
      return;
    }
    setNomeError(""); // Limpar mensagem de erro do nome

    // Verificar se o telefone contém apenas números
    const telefoneRegex = /^\d+$/;
    if (!telefoneRegex.test(telefone)) {
      setTelefoneError("O telefone deve conter apenas números.");
      return;
    }
    setTelefoneError("");

    console.log({ nome, email, telefone, endereco });
  };

  const handleNomeChange = (e) => {
    // Permitir apenas letras e espaços no campo de nome
    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
    setNome(value);
  };

  const handleTelefoneChange = (e) => {
    // Permitir apenas números no campo de telefone
    const value = e.target.value.replace(/\D/g, "");
    setTelefone(value);
  };

  return (
    <form onSubmit={handleSubmit} className="adotante-form">
      <div className="form-group">
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={handleNomeChange}
          required
        />
        {nomeError && <span style={{ color: "red" }}>{nomeError}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="telefone">Telefone</label>
        <input
          type="text"
          id="telefone"
          value={telefone}
          onChange={handleTelefoneChange}
          required
        />
        {telefoneError && <span style={{ color: "red" }}>{telefoneError}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="endereco">Endereço</label>
        <input
          type="text"
          id="endereco"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          required
        />
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  );
}
