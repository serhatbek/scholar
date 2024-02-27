import { Link } from 'react-router-dom';
import { Icon } from '../../../components';
import './OfferCard.scss';

interface OfferCardProps {
  item: {
    percent: string;
    date: string;
    href: string;
  };
}

const OfferCard = ({ item }: OfferCardProps) => {
  const { percent, date, href } = item;
  return (
    <div className='offer-card'>
      <span className='offer-card__offer'>
        off
        <br />
        <em>{percent}</em>%
      </span>
      <div className='offer-card__content'>
        <p>
          VALID: <em>{date}</em>
        </p>
        <p>
          Special Offer <em>{percent}%</em>OFF!
        </p>
      </div>
      <Link to={href}>
        <Icon icon='chevron-right' size='20' />
      </Link>
    </div>
  );
};

export default OfferCard;
