//datas
import { aboutList } from '../datas/aboutList';
//components
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
//images
import img from '../assets/forest.svg';
//style
//import '../styles/pages/about.scss'

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