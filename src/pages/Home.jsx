

import '../styles/home.scss'

import Card from '../components/Card';
import Banner from '../components/Banner';
import img from '../assets/cliff.svg'

import { listeLogements } from '../datas/listeLogements';

function Home() {
  
  
  return (
    <div className="home">
      <Banner 
        imgSrc={img}
        title="Chez vous, partout et ailleurs"
        alt="falaises en bord de mer"
      />

    <div className="cardContainer">
      {listeLogements.map((logement) => (
        <Card 
          key={logement.id}
          id={logement.id}
          cover={logement.cover}
          title={logement.title}
        />
      ))

      }
    </div>
    </div>
  );
}

export default Home;
