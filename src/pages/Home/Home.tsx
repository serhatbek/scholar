import './Home.scss';
import { Button, Carousel, Tag } from '../../components';

const Home = () => {
  return (
    <>
      <section className='section main-banner'>
        <div className='container'>
          <Carousel>
            <p>
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
