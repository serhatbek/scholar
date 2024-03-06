import './ContactUs.scss';
import { dataContact } from '../../assets/data/dataContact';
import { Banner, Button, FloatLabel, OfferCard } from '../../components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import classNames from 'classnames';

interface FormValues {
  fullName: string;
  email: string;
  message: string;
}

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
    watch,
    formState: { isValid },
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(validationSchema) });

  const onFormSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
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
                <FloatLabel label='Full Name' value={watch('fullName')}>
                  <input type='text' {...register('fullName')} />
                </FloatLabel>
                {errors?.fullName && <span>{errors?.fullName?.message}</span>}
              </div>

              <div className='form__row'>
                <FloatLabel label='Email' value={watch('email')}>
                  <input type='email' {...register('email')} />
                </FloatLabel>
                {errors?.email && <span>{errors?.email?.message}</span>}
              </div>

              <div className='form__row'>
                <FloatLabel label='Message' value={watch('message')}>
                  <textarea
                    id='message'
                    rows={20}
                    {...register('message')}
                  ></textarea>
                </FloatLabel>
                {errors?.message && <span>{errors?.message?.message}</span>}
              </div>

              <div className='form__action'>
                <Button
                  type={true}
                  variant='white'
                  btnClass={classNames(`${isValid ? '' : 'btn--disabled'}`)}
                >
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
