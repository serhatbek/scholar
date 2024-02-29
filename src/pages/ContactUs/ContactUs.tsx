import './ContactUs.scss';
import { dataContact } from '../../assets/data/dataContact';
import { Banner, Button, Input, OfferCard } from '../../components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';

interface FormValues {
  fullName: string;
  email: string;
  message: string;
}

const ContactUs = () => {
  const { dataBreadcrumb, heading, dataSection, specialOffer } = dataContact;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  // const [focusedField, setFocusedField] = useState<string | null>(null);

  // const handleFocus = (field: string) => {
  //   setFocusedField(field);
  // };

  // const handleBlur = (e: any) => {
  //   if (!e.target.value || e.target.value === 0) {
  //     setFocusedField(null);
  //   }
  // };

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
            {/* <form className='form' onSubmit={handleSubmit(onFormSubmit)}>
              <div className='form__control'>
                <input
                  id='fullName'
                  type='text'
                  {...register('fullName', {
                    required: 'Full Name is required',
                  })}
                  onFocus={() => handleFocus('fullName')}
                  onBlur={handleBlur}
                />
                <label
                  className={
                    focusedField === 'fullName' ? 'label label--float' : 'label'
                  }
                  htmlFor='fullName'
                >
                  Name
                </label>
                {errors.fullName && <span>{errors.fullName.message}</span>}
              </div>

              <div className='form__control'>
                <input
                  id='fullName'
                  type='email'
                  {...register('email', {
                    required: 'Full Name is required',
                  })}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                />
                <label
                  className={
                    focusedField === 'email' ? 'label label--float' : 'label'
                  }
                  htmlFor='email'
                >
                  Email
                </label>
                {errors.email && <span>{errors.email.message}</span>}
              </div>

              <div className='form__control'>
                <label
                  className={
                    focusedField === 'message' ? 'label label--float' : 'label'
                  }
                  htmlFor='message'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  rows={4}
                  {...register('message', { required: 'Message is required' })}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                />
                {errors.message && <span>{errors.message.message}</span>}
              </div>

              <div className='form__action'>
                <Button type={true} variant='white'>
                  Send Message Now
                </Button>
              </div>
            </form> */}

            <form className='form'>
              <Input id='fullName' label='Name' />
              <Input id='email' label='Email' />

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
