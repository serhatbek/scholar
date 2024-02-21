import { Breadcrumb } from '../../components';
import './Banner.scss';

interface BannerProps {
  title: string;
  items: { label: string; url: string }[];
}

const Banner = ({ items, title }: BannerProps) => {
  return (
    <section className='section banner'>
      <div className='container'>
        <Breadcrumb items={items} />
        <div className='section__heading section__heading--white'>
          <h2>{title}</h2>
        </div>
      </div>
    </section>
  );
};

export default Banner;
