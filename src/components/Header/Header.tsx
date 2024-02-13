import './Header.scss';
import { useEffect, useId, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { dataHeader } from '../../assets/data/dataHeader';
import { Icon } from '../../components';
import classNames from 'classnames';

const Header = () => {
  const { navLinks, registerBtn } = dataHeader;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const handleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleStickyHeader = () => {
      if (window.scrollY > 51) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleStickyHeader);

    return () => {
      window.removeEventListener('scroll', handleStickyHeader);
    };
  }, []);

  return (
    <header
      className={classNames(`${isSticky ? 'header header--sticky' : 'header'}`)}
    >
      <div className='container'>
        <div className='header__logo'>
          <NavLink to='/scholar/'>Scholar</NavLink>
        </div>

        <nav
          className={classNames(
            `${isMenuOpen ? 'header__nav header__nav--visible' : 'header__nav'}`
          )}
        >
          <ul>
            {navLinks?.map((item) => (
              <li key={useId()}>
                <NavLink
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

        <button className='btn header__action' onClick={handleMobileMenu}>
          <Icon icon={isMenuOpen ? 'menu-close' : 'menu-open'} size='34' />
        </button>
      </div>
    </header>
  );
};

export default Header;
