import { dataEvents } from '../../assets/data/dataEvents';
import { Banner } from '../../components';
import './Events.scss';

const Events = () => {
  const { dataBreadcrumb, bannerTitle, dataSchedule } = dataEvents;
  return (
    <>
      <Banner title={bannerTitle} items={dataBreadcrumb} />
      <section className='section schedule'>
        <div className='section__heading'>
          <h6>{dataSchedule?.subtitle}</h6>
          <h2>{dataSchedule?.title}</h2>
        </div>
      </section>
    </>
  );
};

export default Events;
