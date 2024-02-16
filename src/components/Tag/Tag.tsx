import classNames from 'classnames';
import './Tag.scss';

interface TagProps {
  text: string;
  variant?: string;
}

const Tag = ({ text, variant }: TagProps) => {
  return <span className={classNames(`tag tag--${variant}`)}>{text}</span>;
};

export default Tag;
