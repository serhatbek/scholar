import { Breadcrumb } from '../../components';
import './Banner.scss';

interface BannerProps {
  heading: { subtitle: string; title: string };
  items: { label: string; url: string }[];
}

const Banner = ({ items, heading }: BannerProps) => {
  return (
    <section className='section banner'>
      <div className='container'>
        <Breadcrumb items={items} />
        <div className='section__heading section__heading--white'>
          <h6>{heading?.subtitle}</h6>
          <h2>{heading?.title}</h2>
        </div>
      </div>
    </section>
  );
};

export default Banner;
