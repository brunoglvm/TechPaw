//
import { Link } from "react-router-dom";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/adocao">Quero Adotar</Link>
          </li>
          <li>
            <Link to="/pet">Cadastrar Pet</Link>
          </li>
          <li>
            <Link to="/historico">Histórico de Adoções</Link>
          </li>
          <li>
            <Link to="/adotante">Cadastre-se</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
