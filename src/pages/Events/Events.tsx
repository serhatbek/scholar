import { dataEvents } from '../../assets/data/dataEvents';
import { Banner } from '../../components';
import './Events.scss';

const Events = () => {
  const { dataBreadcrumb, title } = dataEvents;
  return (
    <>
      <Banner title={title} items={dataBreadcrumb} />
    </>
  );
};

export default Events;
