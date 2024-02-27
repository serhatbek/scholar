import { FloatLabel } from '../../components';
import './Input.scss';

const Input = ({ placeholder, value }) => {
  return (
    <FloatLabel label={placeholder} value={value}>
      <input type='text' />
    </FloatLabel>
  );
};

export default Input;
