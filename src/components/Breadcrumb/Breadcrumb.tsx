import { useId } from 'react';
import './Breadcrumb.scss';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../components';

interface BreadcrumbProps {
  items: itemProps[];
}

interface itemProps {
  label: string;
  url: string;
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className='breadcrumb'>
      <ul>
        {items?.map((item, index) => {
          const { label, url } = item;
          return (
            <li key={useId()} className='breadcrumb__item'>
              {index === items.length - 1 ? (
                <span>{label}</span>
              ) : (
                <NavLink to={url}>
                  {label}
                  <Icon icon='chevron-right' />
                </NavLink>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
