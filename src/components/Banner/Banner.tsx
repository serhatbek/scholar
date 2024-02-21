import { Breadcrumb } from '../../components';
import './Banner.scss';

interface BannerProps {
  items: [];
}

const Banner = ({ items }: BannerProps) => {
  return (
    <section className='banner'>
      <div className='container'>
        <Breadcrumb items={items} />
      </div>
    </section>
  );
};

export default Banner;
