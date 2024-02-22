import { Icon, Tag } from '../../../components';
import './EventCard.scss';

interface EventCardProps {
  item: itemProps;
}

interface itemProps {
  img: string;
  category: string;
  title: string;
  details: {
    title: string;
    desc: string;
  }[];
  btn: {
    url: string;
  };
}

const EventCard = ({ item }: EventCardProps) => {
  const { img, category, title, details, btn } = item;
  return (
    <div className='event-card'>
      <figure className='event-card__img'>
        <img src={img} alt='' />
      </figure>
      <div className='event-card__category'>
        <Tag text={category} variant='white' />
        <h4>{title}</h4>
      </div>
      <div className='event-card__detail'>
        <ul>
          {details?.map((item) => {
            const { title, desc } = item;
            return (
              <>
                <h6>{title}</h6>
                <p>{desc}</p>
              </>
            );
          })}
        </ul>
      </div>
      <a href={btn.url} className='event-card__action'>
        <Icon icon='chevron-right' size='20' />
      </a>
    </div>
  );
};

export default EventCard;
