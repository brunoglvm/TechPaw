import React from "react";

import cachorro from "@/assets/cachorro.png";

import { Formulario } from "@/components/Formulario/formulario";
import { Header } from "@/components/Header/header";

function Adotante() {
  return (
    <div className="adotante-page">
      <Header />
      <main className="adotante-main">
        <h1>Preencha o formulário abaixo para se cadastrar como adotante</h1>
        <div className="form">
          <img
            src={cachorro}
            alt="Imagem cachorro e dono"
            className="form-image"
          />
          {}
          <Formulario />
        </div>
        {}
      </main>
    </div>
  );
}

export default Adotante;
