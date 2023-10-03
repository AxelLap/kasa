import { Link } from "react-router-dom";

function Card(props) {
    const { id, cover, title } = props;

    return (
        <Link to={`/accomodation/${id}`} className='card'>
            <img className='image' alt='Logement' src={cover}></img>
            <div>
            </div>
            <h2 className='card-title'>{title}</h2>
        </Link>
    )
}

export default Card
