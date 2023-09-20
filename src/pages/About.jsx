import { aboutList } from '../datas/aboutList';

import Banner from '../components/Banner';
import Collapse from '../components/Collapse';

import img from '../assets/forest.svg';

import '../styles/pages/about.scss'

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