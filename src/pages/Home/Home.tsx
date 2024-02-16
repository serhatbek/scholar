import './Home.scss';
import { BannerCard, Carousel } from '../../components';
import { dataHome } from '../../assets/data/dataHome';
import { useId } from 'react';

const Home = () => {
  const { dataBannerSlider } = dataHome;
  return (
    <>
      <section className='section main-banner'>
        <div className='container'>
          <Carousel
            className='main-carousel'
            btnClass='btn btn--transparent main-carousel__btn'
            iconClass='icon--circle icon--transparent'
          >
            {dataBannerSlider?.map((item) => {
              return <BannerCard key={useId()} item={item} />;
            })}
          </Carousel>
        </div>
      </section>

      <section className='section services'>
        <div className='container'>
          <div className='section__heading'>
            <h6></h6>
            <h2></h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
