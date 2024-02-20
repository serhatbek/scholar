import { CountUp } from '../../components';
import './FunFacts.scss';

interface FunFactsProps {
  items: {
    count: number;
    text: string;
  }[];
}

const FunFacts = ({ items }: FunFactsProps) => {
  return (
    <section className='section fun-facts section--left-purple'>
      <div className='container'>
        {items?.map((item) => (
          <CountUp item={item} />
        ))}
      </div>
    </section>
  );
};

export default FunFacts;
