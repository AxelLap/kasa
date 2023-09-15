import { NavLink } from "react-router-dom";

function Header() {
    return (
      <div className="header">
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