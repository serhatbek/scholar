import { useState } from 'react';
import './Input.scss';
import { UseFormRegister } from 'react-hook-form';
import * as yup from 'yup';
import { tr } from 'yup-locales';

yup.setLocale(tr);

export interface FormValues {
  fullName: string;
  email: string;
  message: string;
}

interface InputProps {
  id: any;
  label: string;
  type?: string;
  register: UseFormRegister<FormValues>;
  required: boolean;
  validationSchema?: yup.Schema<any>;
}

const Input = ({
  id,
  label,
  type = 'text',
  required,
  validationSchema,
  register,
  ...props
}: InputProps) => {
  const [focus, setFocus] = useState(false);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!value || value === '') {
      setFocus(false);
    }
  };
  const handleFocus = () => setFocus(true);

  return (
    <div className='input' onBlur={handleBlur} onFocus={handleFocus}>
      <input
        id={id}
        type={type}
        {...props}
        {...register(id, {
          required: required ? `${label} is required` : false,
          ...(validationSchema && {
            validate: (value: any) =>
              validationSchema
                .validate(value)
                .then(() => true)
                .catch((err: any) => err.message),
          }),
        })}
      />
      <label className={focus ? 'label label--float' : 'label'} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Input;
