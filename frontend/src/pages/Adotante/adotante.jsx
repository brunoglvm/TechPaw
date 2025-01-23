import React from "react";
import "./adotante.css";

import cachorro from "@/assets/cachorro.png";

import { Form } from "@/components/Form/form";
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
          <Form />
        </div>
        {}
      </main>
    </div>
  );
}

export default Adotante;
