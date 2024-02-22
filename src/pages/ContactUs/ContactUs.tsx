import { dataContact } from '../../assets/data/dataContact';
import { Banner } from '../../components';
import './ContactUs.scss';

const ContactUs = () => {
  const { dataBreadcrumb, heading } = dataContact;
  return (
    <>
      <Banner heading={heading} items={dataBreadcrumb} />
    </>
  );
};

export default ContactUs;
