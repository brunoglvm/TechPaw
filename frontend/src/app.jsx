import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/global.css';
import Home from './pages/Home/Home';
import Adotante from './pages/Adotante/Adotante';
import Adocao from './pages/Adocao/Adocao';
import Pet from './pages/Pet/Pet';

function App() {
  const [pets, setPets] = useState([]); // Estado para armazenar os pets

  // Função para adicionar um pet à lista
  const handleAddPet = (newPet) => {
    setPets((prevPets) => [...prevPets, newPet]); // Adiciona o novo pet ao estado
  };

  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/adocao">Quero Adotar</Link></li>
            <li><Link to="/pet">Cadastrar Pet </Link></li>
            <li><Link to="/adotante">Cadastre-se</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adotante" element={<Adotante />} />
        <Route path="/adocao" element={<Adocao />} />
        {/* Passando o estado pets e a função onAddPet para o componente Pet */}
        <Route path="/pet" element={<Pet onAddPet={handleAddPet} pets={pets} />} />
      </Routes>
    </Router>
  );
}

export default App;
