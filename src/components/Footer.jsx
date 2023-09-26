//import '../styles//components/footer.scss'

import img from '../assets/kasa-logo-white.svg'

function Footer() {
  return (
    <div className="footer">
      <img src={img} alt='logo kasa blanc' />
      <span>© 2020 Kasa. All rights reserved</span>
    </div>
  );
}

export default Footer;