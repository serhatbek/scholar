import classNames from 'classnames';

interface iconProps {
  icon: string;
  size?: string;
  variant?: string;
}

const Icon = ({ icon, size, variant }: iconProps) => {
  return (
    <i
      className={classNames(`icon icon-${icon} icon--${variant}`)}
      style={{ fontSize: `${size}px` }}
    ></i>
  );
};

export default Icon;
