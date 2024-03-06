import './FloatLabel.scss';
import { useState } from 'react';

interface FloatLabelProps {
  children: any;
  label: string;
  value: string;
}

const FloatLabel = ({ children, label, value }: FloatLabelProps) => {
  const [focus, setFocus] = useState(false);

  const labelClass =
    focus || (value && value.length !== 0) ? 'label label--float' : 'label';

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!value || value === '') {
      setFocus(false);
    }
  };
  const handleFocus = () => setFocus(true);

  return (
    <div className='float-label' onBlur={handleBlur} onFocus={handleFocus}>
      {children}
      <label className={labelClass}>{label}</label>
    </div>
  );
};

export default FloatLabel;
