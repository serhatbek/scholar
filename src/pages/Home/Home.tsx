import './Home.scss';
import { Carousel } from '../../components';

const Home = () => {
  return (
    <>
      <section className='section main-banner'>
        <div className='container'>
          <Carousel>
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
