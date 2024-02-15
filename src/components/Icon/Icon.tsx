import './Icon.scss';
import classNames from 'classnames';

interface iconProps {
  icon: string;
  size?: string;
  iconClass?: string;
}

const Icon = ({ icon, size, iconClass }: iconProps) => {
  return (
    <i
      className={classNames(`icon icon-${icon} ${iconClass}`)}
      style={{ fontSize: `${size}px` }}
    ></i>
  );
};

export default Icon;
