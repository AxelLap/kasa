import { listeAPropos } from '../datas/listeAPropos';

import Banner from '../components/Banner';
import Collapse from '../components/Collapse';

import img from '../assets/forest.svg';

import '../styles/pages/apropos.scss'

function Àpropos() {
  return (
    <div className="apropos-container">
      <Banner
        imgSrc={img}
      />
      <div className="collapse-container">
        {listeAPropos.map((item) => (
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
export default Àpropos;