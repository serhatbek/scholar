import { Link } from 'react-router-dom';
import './Footer.scss';
import { dataFooter } from '../../assets/data/dataFooter';

const Footer = () => {
  const { copy, link } = dataFooter;
  return (
    <footer className='footer'>
      <div className='container'>
        <p>{copy}</p>
        <p>
          {link.text}: <Link to={link.url}>{link.label}</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
