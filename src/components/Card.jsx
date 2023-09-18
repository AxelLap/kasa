import { Link } from "react-router-dom";
import '../styles/components/card.scss'

function Card(props){
    const{ cover, title} = props;  

    return(
    <Link className='card'>
        <img className='image' alt='Logement' src={cover}></img>
        <div>
        </div>
        <h2 className='card-title'>{title}</h2>
    </Link>
    )
}

export default Card