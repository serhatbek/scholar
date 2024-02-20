import './Home.scss';
import {
  Accordion,
  BannerCard,
  Button,
  Carousel,
  ServicesCard,
} from '../../components';
import { dataHome } from '../../assets/data/dataHome';
import { useId } from 'react';
import { CountUp } from '../../components';

const Home = () => {
  const { dataBannerSlider, dataServices, dataAbout, dataFunFacts } = dataHome;
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
        <div className='section__heading'>
          <h6>{dataServices.subtitle}</h6>
          <h2>{dataServices.title}</h2>
        </div>
        <div className='container'>
          <div className='box'>
            {dataServices?.cards?.map((item) => (
              <ServicesCard key={useId()} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className='section about-us section--right-gray'>
        <div className='container'>
          <Accordion items={dataAbout.accordionItems} />
          <div className='about-us__right'>
            <div className='section__heading'>
              <h6>{dataAbout.subtitle}</h6>
              <h2>{dataAbout.title}</h2>
            </div>
            <p>{dataAbout.desc}</p>
            <div className='about-us__right__action'>
              <Button
                variant={dataAbout.btn.variant}
                href={dataAbout.btn.url}
                iconRight={dataAbout.btn.icon}
                size='20'
              >
                {dataAbout.btn.text}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className='section fun-facts section--left-purple'>
        <div className='container'>
          {dataFunFacts?.map((item) => (
            <CountUp key={useId()} item={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
