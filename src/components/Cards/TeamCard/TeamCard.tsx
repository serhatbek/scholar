import { useId } from 'react';
import { SocialIcon } from '../..';
import './TeamCard.scss';

interface TeamCardProps {
  item: itemProps;
}

interface itemProps {
  img: string;
  job: string;
  name: string;
  socials: {
    icon: string;
    url: string;
  }[];
}

const TeamCard = ({ item }: TeamCardProps) => {
  const { img, job, name, socials } = item;
  return (
    <div className='team-card'>
      <figure>
        <img src={img} alt='' />
      </figure>

      <span>{job}</span>
      <h4>{name}</h4>
      <div className='team-card__social'>
        {socials?.map((item) => {
          const { icon, url } = item;
          return <SocialIcon key={useId()} icon={icon} href={url} />;
        })}
      </div>
    </div>
  );
};

export default TeamCard;
