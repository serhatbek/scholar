import { useState } from 'react';
import './Input.scss';

interface InputProps {
  id: string;
  label: string;
  type?: string;
}

const Input = ({ id, label, type }: InputProps) => {
  const [focus, setFocus] = useState(false);

  const handleBlur = (e: any) => {
    const { value } = e.target;
    if (!value || value === '') {
      setFocus(false);
      console.log('value', value);
    }

    // if (value.length > 0) {
    //   setFocus(true);
    // }
  };
  const handleFocus = () => setFocus(true);

  return (
    <div
      className='form__control'
      onBlur={(e) => handleBlur(e)}
      onFocus={handleFocus}
    >
      <input id={id} type={type} />
      <label className={focus ? 'label label--float' : 'label'} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Input;
