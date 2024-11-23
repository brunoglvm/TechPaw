import React from 'react';
import gato from "../../assets/gato2.png";

function Home() {
  return (
    <div className="banner">
      <h1 className="banner-title">TechPaw</h1>
      <p className="banner-subtitle">Encontre seu melhor amigo de quatro patas aqui!</p>
      <img src={gato} alt="Imagem gato e dono"/>
    </div>
  );
}

export default Home;