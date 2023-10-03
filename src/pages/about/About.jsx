import { aboutList } from '../../datas/aboutList';

import Banner from '../../components/banner/Banner';
import Collapse from '../../components/collapse/Collapse';

import img from '../../assets/forest.png';

function About() {
  return (
    <div className="apropos-container">

      <Banner
        imgSrc={img}
      />

      <div className="collapse-container">
        {aboutList.map((item) => (
          <Collapse
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

    </div>
  );
}
export default About;
