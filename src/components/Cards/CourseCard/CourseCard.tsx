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
        <figure>
          <img src={img} alt='' />
        </figure>
      </a>
      <Tag text={category} variant='white' />
      <span className='course-card__price'>
        <em>$</em>
        {price}
      </span>
      <div className='course-card__desc'>
        <span>{teacher}</span>
        <h4>{desc}</h4>
      </div>
    </div>
  );
};

export default CourseCard;
