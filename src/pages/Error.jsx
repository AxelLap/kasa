import { NavLink } from "react-router-dom";

import img from '../assets/not-found.svg'

import '../styles/pages/error.scss'

function Error() {
  return (
    <div className="error">
      <img src={img} alt="logo erreur 404" />
      <span>Oups ! La page que vous demandez n'éxiste pas</span>
      <NavLink to="/" className="returnHome">Retourner sur la page d'acceuil</NavLink>
    </div>
  );
}

export default Error;