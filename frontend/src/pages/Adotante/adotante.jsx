import React from "react";
import styles from "./adotante.module.css";

import cachorro from "@/assets/cachorro.png";

import { Form } from "@/components/Form/form";
import { Header } from "@/components/Header/header";

function Adotante() {
  return (
    <div className={styles.adotantePage}>
      <Header />
      <main className={styles.adotanteMain}>
        <h1>Preencha o formulário abaixo para se cadastrar como adotante</h1>
        <div className={styles.form}>
          <img
            src={cachorro}
            alt="Cachorro com o seu dono"
            className={styles.formImage}
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
