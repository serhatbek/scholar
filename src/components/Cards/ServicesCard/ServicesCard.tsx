import { Button } from '../../../components';
import './ServicesCard.scss';

interface ServicesCardProps {
  item: {
    title: string;
    desc: string;
    img: string;
    btn: {
      text: string;
      url: string;
      variant: string;
      icon: string;
    };
  };
}

const ServicesCard = ({ item }: ServicesCardProps) => {
  const { title, desc, img, btn } = item;
  return (
    <div className='services-card'>
      <figure className='services-card__img'>
        <img src={img} alt='' />
      </figure>
      <div className='services-card__body'>
        <h4>{title}</h4>
        <p>{desc}</p>
        <Button
          href={btn.url}
          variant={btn.variant}
          size='20'
          iconRight={btn.icon}
        >
          {btn.text}
        </Button>
      </div>
    </div>
  );
};

export default ServicesCard;
