import { useState } from 'react';
import './FloatLabel.scss';

interface FloatLabelProps {
  children: string;
  label: string;
  value: string;
}

const FloatLabel = ({ children, label, value }: FloatLabelProps) => {
  const [focus, setFocus] = useState(false);

  const handleFocus = () => setFocus(true);
  const handleBlur = () => setFocus(false);

  const labelClass =
    focus || value.length !== 0 ? 'label label-float' : 'label';

  return (
    <div className='float-label' onBlur={handleBlur} onFocus={handleFocus}>
      {children}
      <label className={labelClass}>{label}</label>
    </div>
  );
};

export default FloatLabel;
