import { Link } from "react-router-dom";

import img from '../../assets/not-found.svg'

function Error() {
  return (
    <div className="error">
      <img src={img} alt="logo erreur 404" />
      <span>Oups ! La page que vous demandez n'existe pas</span>
      <Link to="/" className="returnHome">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Error;
