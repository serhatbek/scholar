import { useId } from 'react';
import { dataEvents } from '../../assets/data/dataEvents';
import { Banner } from '../../components';
import EventCard from '../../components/Cards/EventCard/EventCard';
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
        <div className='container'>
          <div className='box'>
            {dataSchedule?.cards?.map((item) => (
              <EventCard key={useId()} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
