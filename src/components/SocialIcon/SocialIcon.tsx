import './SocialIcon.scss';
import { Icon } from '../../components';
import { Link } from 'react-router-dom';

interface SocialIconProps {
  icon: string;
  size: string;
  href: string;
}

const SocialIcon = ({ icon, size, href }: SocialIconProps) => {
  return (
    <Link className='social-icon' to={href}>
      <Icon size={size} icon={icon} />
    </Link>
  );
};

export default SocialIcon;
