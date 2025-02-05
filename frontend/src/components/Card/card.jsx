import styles from "./card.module.css";

export function Card({ pets, children }) {
  return (
    <>
      {pets.map((pet) => (
        <div key={pet.id} className={styles.petCard}>
          <img src={pet.foto} alt={pet.nome} className={styles.petImage} />
          <div className={styles.petInfo}>
            <h3>{pet.nome}</h3>
            <p>Espécie: {pet.especie}</p>
            <p>Porte: {pet.porte}</p>
            <p>
              Idade: {pet.idade} {pet.idade > 1 ? "anos" : "ano"}
            </p>
            {children}
          </div>
        </div>
      ))}
    </>
  );
}
