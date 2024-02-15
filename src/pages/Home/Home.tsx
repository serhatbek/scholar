import './Home.scss';
import { BannerCard, Carousel } from '../../components';
import { dataHome } from '../../assets/data/dataBannerSlider';
import { useId } from 'react';

const Home = () => {
  const { dataBannerSlider } = dataHome;
  return (
    <>
      <section className='section main-banner'>
        <div className='container'>
          <Carousel
            btnClass='btn btn--transparent'
            iconClass='icon--circle icon--purple'
          >
            {dataBannerSlider?.map((item) => {
              return <BannerCard key={useId()} item={item} />;
            })}
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Home;
