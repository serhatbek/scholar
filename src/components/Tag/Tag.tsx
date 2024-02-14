import classNames from 'classnames';
import './Tag.scss';

interface TagProps {
  text: string;
  tagClass?: string;
}

const Tag = ({ text, tagClass }: TagProps) => {
  return <div className={classNames(`tag, ${tagClass}`)}>{text}</div>;
};

export default Tag;
