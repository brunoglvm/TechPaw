import { Link } from "react-router-dom";
import "./header.css";

export function Header() {
  return (
    <header className="header">
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
            <Link to="/historico">Histórico</Link>
          </li>
          <li>
            <Link to="/adotante">Cadastre-se</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
