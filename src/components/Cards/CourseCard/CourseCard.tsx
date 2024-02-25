import { Tag } from '../../../components';
import './CourseCard.scss';

interface CourseCardProps {
  item: {
    href: string;
    img: string;
    category: string;
    price: string;
    teacher: string;
    desc: string;
  };
}

const CourseCard = ({ item }: CourseCardProps) => {
  const { href, img, category, price, teacher, desc } = item;
  return (
    <div className='course-card'>
      <a href={href}>
        <Tag text={category} />
        <span>{price}</span>
        <figure>
          <img src={img} alt='' />
        </figure>
      </a>
      <h6>{teacher}</h6>
      <h4>{desc}</h4>
    </div>
  );
};

export default CourseCard;
