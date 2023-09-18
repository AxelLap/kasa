import { NavLink } from "react-router-dom";
import logo from '../assets/kasa-logo.svg'
import '../styles/components/header.scss';

function Header() {
    return (
      <div className="header">
        <img src={logo} alt="logo kasa"/>
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? "activeLink" : undefined )}>Acceuil</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? "activeLink" : undefined )}>À propos</NavLink>
                </li>
            </ul>
        </nav>
      </div>
    );
  }
  
  export default Header;