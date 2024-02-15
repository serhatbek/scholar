import { Button, Tag } from '../../../components';
import './BannerCard.scss';

interface BannerCardProps {
  item: itemProps;
}

interface itemProps {
  tag: string;
  title: string;
  desc: string;
  img: string;
  btn: {
    text: string;
    variant: string;
    url: string;
  };
  iconBtn: {
    text: string;
    variant: string;
    url: string;
    icon?: string;
    size?: string;
    iconClass?: string;
  };
}

const BannerCard = ({ item }: BannerCardProps) => {
  const { tag, title, desc, img, btn, iconBtn } = item;
  return (
    <div className='banner-card' style={{ backgroundImage: `url(${img})` }}>
      <Tag text={tag} />
      <h2>{title}</h2>
      <p>{desc}</p>
      <div className='banner-card__action'>
        <Button variant={btn.variant} href={btn.url}>
          {btn.text}
        </Button>
        <Button
          variant={iconBtn.variant}
          href={iconBtn.url}
          iconLeft={iconBtn.icon}
          iconClass={iconBtn.iconClass}
          size='28'
        >
          {iconBtn.text}
        </Button>
      </div>
    </div>
  );
};

export default BannerCard;
