import React, { useState, useEffect } from 'react';

const buscarPets = async (filters) => {
  const pets = [
    { id: 1, nome: 'Rex', raca: 'Labrador', porte: 'Médio', idade: 3, sexo: 'Macho', tipo: 'Cachorro', foto: 'rex.jpg' },
    { id: 2, nome: 'Fifi', raca: 'Poodle', porte: 'Pequeno', idade: 2, sexo: 'Fêmea', tipo: 'Cachorro', foto: 'fifi.jpg' },
    { id: 3, nome: 'Milo', raca: 'Beagle', porte: 'Médio', idade: 4, sexo: 'Macho', tipo: 'Cachorro', foto: 'milo.jpg' },
    { id: 4, nome: 'Luna', raca: 'Persa', porte: 'Pequeno', idade: 1, sexo: 'Fêmea', tipo: 'Gato', foto: 'luna.jpg' },
    { id: 5, nome: 'Simba', raca: 'Siamês', porte: 'Médio', idade: 2, sexo: 'Macho', tipo: 'Gato', foto: 'simba.jpg' },
    { id: 6, nome: 'Bella', raca: 'Golden Retriever', porte: 'Grande', idade: 5, sexo: 'Fêmea', tipo: 'Cachorro', foto: 'bella.jpg' },
    { id: 7, nome: 'Tom', raca: 'Maine Coon', porte: 'Grande', idade: 3, sexo: 'Macho', tipo: 'Gato', foto: 'tom.jpg' },
    { id: 8, nome: 'Max', raca: 'Rottweiler', porte: 'Grande', idade: 6, sexo: 'Macho', tipo: 'Cachorro', foto: 'max.jpg' },
    { id: 9, nome: 'Mia', raca: 'Sphynx', porte: 'Pequeno', idade: 1, sexo: 'Fêmea', tipo: 'Gato', foto: 'mia.jpg' },
    { id: 10, nome: 'Charlie', raca: 'Bulldog', porte: 'Médio', idade: 4, sexo: 'Macho', tipo: 'Cachorro', foto: 'charlie.jpg' },
  ];

  if (filters) {
    return pets.filter(pet => 
      (!filters.porte || pet.porte === filters.porte) &&
      (!filters.sexo || pet.sexo === filters.sexo) &&
      (!filters.idade || pet.idade === filters.idade) &&
      (!filters.tipo || pet.tipo === filters.tipo)
    );
  }

  return pets;
};

function Adocao() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({
    porte: '',
    sexo: '',
    idade: '',
    tipo: '',
  });

  useEffect(() => {
    const fetchPets = async () => {
      const data = await buscarPets(filters);
      setPets(data);
    };

    fetchPets();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div>
      {}
       <div className="filtro-container">
        <h3>Filtrar Pets</h3>
        <form>
          <label>
            Porte:
            <select name="porte" value={filters.porte} onChange={handleFilterChange}>
              <option value="">Selecione</option>
              <option value="Pequeno">Pequeno</option>
              <option value="Médio">Médio</option>
              <option value="Grande">Grande</option>
            </select>
          </label>

          <label>
            Sexo:
            <select name="sexo" value={filters.sexo} onChange={handleFilterChange}>
              <option value="">Selecione</option>
              <option value="Macho">Macho</option>
              <option value="Fêmea">Fêmea</option>
            </select>
          </label>

          <label>
            Idade:
            <input
              type="number"
              name="idade"
              value={filters.idade}
              onChange={handleFilterChange}
              placeholder="Idade"
            />
          </label>

          <label>
            Tipo:
            <select name="tipo" value={filters.tipo} onChange={handleFilterChange}>
              <option value="">Selecione</option>
              <option value="Cachorro">Cachorro</option>
              <option value="Gato">Gato</option>
            </select>
          </label>
        </form>
      </div>
     
      <h2>Pets Disponíveis para Adoção</h2>

      <div className="pets-container">
        {pets.map(pet => (
          <div key={pet.id} className="pet-card">
            <img src={pet.foto} alt={pet.nome} className="pet-image" />
            <div className="pet-info">
              <h3>{pet.nome}</h3>
              <p>Raça: {pet.raca}</p>
              <p>Porte: {pet.porte}</p>
              <p>Idade: {pet.idade} anos</p>
              <button>Quero Adotar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Adocao;
