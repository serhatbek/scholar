import { dataContact } from '../../assets/data/dataContact';
import { Banner } from '../../components';
import './ContactUs.scss';

const ContactUs = () => {
  const { dataBreadcrumb, title } = dataContact;
  return (
    <>
      <Banner title={title} items={dataBreadcrumb} />
    </>
  );
};

export default ContactUs;
