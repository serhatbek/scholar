import './CountUp.scss';
import CountUpRC from 'react-countup';

interface CountUpProps {
  item: {
    count: number;
    text: string;
  };
}

const CountUp = ({ item }: CountUpProps) => {
  const { count, text } = item;
  return (
    <div className='count-up'>
      <CountUpRC end={count} duration={20} suffix=' +' />
      <span>{text}</span>
    </div>
  );
};

export default CountUp;
