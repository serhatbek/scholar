import './ContactUs.scss';
import { dataContact } from '../../assets/data/dataContact';
import { Banner, Button, Input, OfferCard } from '../../components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormValues } from '../../components/Input/Input';

const validationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required('Adınızı ve soyadınızı girmelisiniz.')
    .min(6, 'Tam adınız 6 karakterden az olmamalı.')
    .max(20, 'Tam adınız 20 karakteri geçmemeli.'),
  email: yup
    .string()
    .email('Geçerli bir mail adresi giriniz.')
    .required('Email adresi zorunlu.'),
  message: yup.string().required('Mesaj alanı zorunlu.'),
});

const ContactUs = () => {
  const { dataBreadcrumb, heading, dataSection, specialOffer } = dataContact;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(validationSchema) });

  const onFormSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('form data', data);
    console.log('first submit');
  };

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
          <div className='contact__right'>
            <form className='form' onSubmit={handleSubmit(onFormSubmit)}>
              <div className='form__row'>
                <Input
                  id='fullName'
                  label='Name'
                  register={register}
                  required
                  validationSchema={validationSchema}
                />
                {errors?.fullName && <span>{errors?.fullName?.message}</span>}
              </div>

              <div className='form__row'>
                <Input
                  id='email'
                  label='Email'
                  register={register}
                  required
                  validationSchema={validationSchema}
                />
                {errors?.email && <span>{errors?.email?.message}</span>}
              </div>

              <div className='form__action'>
                <Button type={true} variant='white'>
                  Send Message Now
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
