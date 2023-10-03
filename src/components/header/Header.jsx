import { NavLink } from "react-router-dom";
import logo from '../../assets/kasa-logo.svg';

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo kasa" />
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeclassname="active">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeclassname="active">À propos</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
