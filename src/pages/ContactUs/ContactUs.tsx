import { dataContact } from '../../assets/data/dataContact';
import { Banner, OfferCard } from '../../components';
import './ContactUs.scss';

const ContactUs = () => {
  const { dataBreadcrumb, heading, dataSection, specialOffer } = dataContact;
  return (
    <>
      <Banner heading={heading} items={dataBreadcrumb} />
      <section className='section contact section--left-gray'>
        <div className='container'>
          <div className='contact__left'>
            <div className='section__heading'>
              <h6>{dataSection?.subtitle}</h6>
              <h2>{dataSection?.title}</h2>
            </div>
            <p className='section__desc'>{dataSection?.desc}</p>
            <OfferCard item={specialOffer} />
          </div>
          <div className='contact__right'></div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
