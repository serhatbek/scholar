import { dataContact } from '../../assets/data/dataContact';
import { Banner } from '../../components';
import './ContactUs.scss';

const ContactUs = () => {
  const { dataBreadcrumb, bannerTitle } = dataContact;
  return (
    <>
      <Banner title={bannerTitle} items={dataBreadcrumb} />
    </>
  );
};

export default ContactUs;
