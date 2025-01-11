import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/vars.css";
import "./styles/global.css";
import "./styles/media-queries.css";

import Home from "./pages/Home/home";
import Adotante from "./pages/Adotante/adotante";
import Adocao from "./pages/Adocao/adocao";
import Historico from "./pages/Historico/historico";
import Pet from "./pages/Pet/Pet";

function App() {
  const [pets, setPets] = useState([]); // Estado para armazenar os pets

  // Função para adicionar um pet à lista
  const handleAddPet = (newPet) => {
    setPets((prevPets) => [...prevPets, newPet]); // Adiciona o novo pet ao estado
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adocao" element={<Adocao />} />
        {/* Passando o estado pets e a função onAddPet para o componente Pet */}
        <Route
          path="/pet"
          element={<Pet onAddPet={handleAddPet} pets={pets} />}
        />
        <Route path="/historico" element={<Historico />} />
        <Route path="/adotante" element={<Adotante />} />
      </Routes>
    </Router>
  );
}

export default App;
