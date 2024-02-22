import { useId } from 'react';
import { dataEvents } from '../../assets/data/dataEvents';
import { Banner } from '../../components';
import EventCard from '../../components/Cards/EventCard/EventCard';
import './Events.scss';

const Events = () => {
  const { dataBreadcrumb, dataSchedule, heading } = dataEvents;
  return (
    <>
      <Banner heading={heading} items={dataBreadcrumb} />
      <section className='section schedule'>
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
