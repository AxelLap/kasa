import Card from '../../components/card/Card';
import Banner from '../../components/banner/Banner';

import img from '../../assets/cliff.png'

import { accomodationList } from '../../datas/accomodationList';

function Home() {
  return (
    <div className="home">
      <Banner
        imgSrc={img}
        title="Chez vous, partout et ailleurs"
        alt="falaises en bord de mer"
      />

      <div className="cardContainer">
        {accomodationList.map((accomodation) => (
          <Card
            key={accomodation.id}
            id={accomodation.id}
            cover={accomodation.cover}
            title={accomodation.title}
          />
        ))

        }
      </div>
    </div>
  );
}

export default Home;
