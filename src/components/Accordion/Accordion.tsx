import { Icon } from '../../components';
import './Accordion.scss';

interface AccordionProps {
  items: { title: string; desc: string }[];
}

const Accordion = ({ items }: AccordionProps) => {
  return (
    <div className='accordion'>
      {items?.map((item) => {
        const { title, desc } = item;
        return (
          <div className='accordion__item'>
            <button className='accordion__item__header'>
              <span>{title}</span>
              <Icon icon='minus' size='28' />
            </button>
            <p className='accordion__item__body'>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
