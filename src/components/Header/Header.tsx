import './Header.scss';
import { useId } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { dataHeader } from '../../assets/data/dataHeader';
import { Icon } from '../../components';

const Header = () => {
  const { navLinks, registerBtn } = dataHeader;
  // const { pathname } = useLocation();

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
                  // className={pathname === item.url ? 'active' : ''}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to={item.url}
                  end
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to={registerBtn.link}>{registerBtn.text}</Link>
            </li>
          </ul>
        </nav>

        <button className='btn header__action'>
          <Icon icon='menu-open' size='34' />
        </button>
      </div>
    </header>
  );
};

export default Header;
