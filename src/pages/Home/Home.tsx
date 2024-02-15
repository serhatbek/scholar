import './Home.scss';
import { BannerCard, Button, Carousel, Tag } from '../../components';
import { dataHome } from '../../assets/data/dataBannerSlider';
import { useId } from 'react';

const Home = () => {
  const { dataBannerSlider } = dataHome;
  return (
    <>
      <section className='section main-banner'>
        <div className='container'>
          <Carousel>
            <div>
              {dataBannerSlider?.map((item) => {
                return <BannerCard key={useId()} item={item} />;
              })}
              <Tag text='OUR COURSES' tagClass='purple' />
              <Tag text='OUR COURSES' tagClass='white' />
              <Button btnClass='fdd' variant='purple' type={true}>
                Request Demo
              </Button>
              <Button href='/scholar/' variant='white'>
                Request Demo
              </Button>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestiae illum harum repellendus ducimus sunt error ipsam laborum
              repudiandae officiis illo!
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestiae illum harum repellendus ducimus sunt error ipsam laborum
              repudiandae officiis illo!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestiae illum harum repellendus ducimus sunt error ipsam laborum
              repudiandae officiis illo!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestiae illum harum repellendus ducimus sunt error ipsam laborum
              repudiandae officiis illo!
            </p>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Home;
