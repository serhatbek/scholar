import './SocialIcon.scss';
import { Icon } from '../../components';
import { Link } from 'react-router-dom';

interface SocialIconProps {
  icon: string;
  href: string;
}

const SocialIcon = ({ icon, href }: SocialIconProps) => {
  return (
    <Link className='social-icon' to={href}>
      <Icon size='20' icon={icon} />
    </Link>
  );
};

export default SocialIcon;
