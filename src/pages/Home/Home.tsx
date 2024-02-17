import './Home.scss';
import { BannerCard, Carousel, ServicesCard } from '../../components';
import { dataHome } from '../../assets/data/dataHome';
import { useId } from 'react';

const Home = () => {
  const { dataBannerSlider, dataServices } = dataHome;
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
            <h6>{dataServices.subtitle}</h6>
            <h2>{dataServices.title}</h2>
          </div>
          <div className='box'>
            {dataServices?.cards?.map((item) => (
              <ServicesCard item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
