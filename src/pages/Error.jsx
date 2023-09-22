//hooks
import { NavLink } from "react-router-dom";
//images
import img from '../assets/not-found.svg'
//style
//import '../styles/pages/error.scss'

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