import './Header.scss';
import { useId } from 'react';
import { NavLink } from 'react-router-dom';
import { dataHeader } from '../../assets/data/dataHeader';

const Header = () => {
  const { navLinks } = dataHeader;

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__logo'>
          <NavLink to='/scholar/'>Scholar</NavLink>
        </div>

        <nav className='header__nav'>
          <ul>
            {navLinks?.map((item) => (
              <li key={useId()}>
                <NavLink to={item.url}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
