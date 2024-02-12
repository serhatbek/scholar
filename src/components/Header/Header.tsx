import './Header.scss';
import { useId } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { dataHeader } from '../../assets/data/dataHeader';

const Header = () => {
  const { navLinks } = dataHeader;
  const { pathname } = useLocation();

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
                <NavLink
                  className={pathname === item.url ? 'active' : ''}
                  // className={({ isActive }) => (isActive ? 'active' : '')}
                  to={item.url}
                  end
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
