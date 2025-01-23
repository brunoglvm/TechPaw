import React, { useState, useEffect } from "react";
import "./home.css";

import gatoBanner from "@/assets/gato2.png";
import cachorroFeliz from "@/assets/cachorro-feliz.png";
import cachorro2 from "@/assets/cachorro2.png";
import cachorro1 from "@/assets/cachorro1.png";
import tomFoto from "@/assets/tom.jpg";
import miloFoto from "@/assets/milo.jpg";
import miaFoto from "@/assets/mia.jpg";
import maxFoto from "@/assets/max.jpg";
import charlieFoto from "@/assets/charlie.jpg";

import { Header } from "@/components/Header/header";
import { Footer } from "@/components/Footer/footer";

// Função para obter os pets disponíveis
const buscarPets = async () => {
  return [
    {
      id: 1,
      nome: "Tom",
      raca: "Vira-lata",
      porte: "Pequeno",
      idade: 2,
      sexo: "Macho",
      tipo: "Cachorro",
      foto: tomFoto,
    },
    {
      id: 2,
      nome: "Milo",
      raca: "Bulldog",
      porte: "Médio",
      idade: 3,
      sexo: "Macho",
      tipo: "Cachorro",
      foto: miloFoto,
    },
    {
      id: 3,
      nome: "Mia",
      raca: "Persa",
      porte: "Pequeno",
      idade: 1,
      sexo: "Fêmea",
      tipo: "Gato",
      foto: miaFoto,
    },
    {
      id: 4,
      nome: "Max",
      raca: "Golden Retriever",
      porte: "Grande",
      idade: 4,
      sexo: "Macho",
      tipo: "Cachorro",
      foto: maxFoto,
    },
    {
      id: 5,
      nome: "Charlie",
      raca: "Siamês",
      porte: "Pequeno",
      idade: 2,
      sexo: "Macho",
      tipo: "Gato",
      foto: charlieFoto,
    },
  ];
};

function Home() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      const data = await buscarPets();
      setPets(data);
    };

    fetchPets();
  }, []);

  return (
    <div>
      <Header />
      {/* Banner */}
      <section className="banner">
        <h1 className="banner-title">TechPaw</h1>
        <p className="banner-subtitle">
          Encontre seu melhor amigo de quatro patas aqui!
        </p>
        <img src={gatoBanner} alt="Imagem de um gato com seu dono" />
      </section>

      {/* Por Que Adotar? */}
      <section className="por-que-adotar">
        <h2>Por Que Adotar?</h2>
        <div className="cards">
          <div className="card">
            <h3>Benefícios de Adotar</h3>
            <ul>
              <li>Ajuda a combater o abandono animal.</li>
              <li>Ganha um companheiro fiel e amoroso.</li>
              <li>Reduz o estresse e aumenta a felicidade.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Adotar é um Ato de Amor</h3>
            <ul>
              <li>
                Proporciona uma nova oportunidade para quem precisa de carinho.
              </li>
              <li>
                É uma forma de contribuir para um mundo melhor para todos.
              </li>
            </ul>
          </div>
          <div className="card">
            <h3>Adoção Transforma Vidas</h3>
            <ul>
              <li>Oferece uma segunda chance para o animal.</li>
              <li>Cria um vínculo único entre humano e pet.</li>
              <li>Impacta positivamente na sociedade.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Animais Disponíveis */}
      <section className="animais-disponiveis">
        <h2>Animais Disponíveis para Adoção</h2>
        <div className="animais-grid">
          {pets.map((pet) => (
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
          ))}
        </div>
      </section>

      {/* Informações Educativas */}
      <section className="informacoes-educativas">
        <h2>Informações Educativas</h2>
        <div className="educacao-grid">
          <div className="educacao-card">
            <img src={cachorroFeliz} alt="Cachorro e dona" />
            <h3>Cuidados com Animais Adotados</h3>
            <p>
              Animais adotados precisam de atenção especial. Alimentação
              adequada é essencial para mantê-los saudáveis e cheios de energia.
              Exercícios regulares, como passeios e brincadeiras, ajudam a
              reduzir o estresse e melhorar o comportamento. Além disso,
              consultas veterinárias periódicas garantem que a saúde do seu
              amigo peludo esteja sempre em dia.
            </p>
          </div>
          <div className="educacao-card">
            <img src={cachorro1} alt="Cachorro e dono" />
            <h3>Responsabilidade e Compromisso</h3>
            <p>
              Adotar um animal é um ato de amor, mas também uma grande
              responsabilidade. Você estará assumindo o compromisso de cuidar
              dele por toda a sua vida. Isso significa garantir alimentação,
              higiene, saúde e muito carinho. Esteja preparado para dedicar
              tempo e recursos para proporcionar bem-estar ao seu pet.
            </p>
          </div>
          <div className="educacao-card">
            <img src={cachorro2} alt="Cachorro e dona" />
            <h3>Importância da Castração e Vacinação</h3>
            <p>
              A castração é uma medida essencial para controlar a população
              animal, evitando ninhadas indesejadas que podem acabar em
              abandono. Além disso, castrar os animais reduz o risco de doenças
              graves, como tumores e infecções, melhorando sua qualidade de
              vida.
            </p>
          </div>
        </div>
      </section>

      <section className="contato">
        <form className="form-contato">
          <h2>Entre em Contato</h2>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Seu Nome"
            required
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Seu E-mail"
            required
          />

          <textarea
            id="message"
            name="message"
            placeholder="Sua Mensagem"
            required
          />

          <button>Enviar</button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
