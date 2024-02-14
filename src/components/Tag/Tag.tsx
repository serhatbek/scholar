import classNames from 'classnames';
import './Tag.scss';

interface TagProps {
  text: string;
  tagClass?: string;
}

const Tag = ({ text, tagClass }: TagProps) => {
  return <span className={classNames(`tag tag--${tagClass}`)}>{text}</span>;
};

export default Tag;
