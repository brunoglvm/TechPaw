import React from "react";
import { Formulario } from "../../components/Formulario/Formulario";
import { Card } from "../../components/Card/Card";
import cachorro from "../../assets/cachorro.png";

function Adotante() {
  return (
    <div className="adotante-page">
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
        {/* <Card /> */}
      </main>
    </div>
  );
}

export default Adotante;
