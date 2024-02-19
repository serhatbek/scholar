import { useState } from 'react';
import { Icon } from '../../components';
import './Accordion.scss';
import classNames from 'classnames';

interface AccordionProps {
  items: { title: string; desc: string }[];
}

const Accordion = ({ items }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const AccordionToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='accordion'>
      {items?.map((item, index) => {
        const { title, desc } = item;
        return (
          <div
            key={index}
            className={classNames('accordion__item', {
              open: openIndex === index,
            })}
          >
            <button
              className='accordion__item__header'
              onClick={() => AccordionToggle(index)}
            >
              <span>{title}</span>
              <Icon
                icon={classNames(`${openIndex === index ? 'minus' : 'plus'}`)}
                size='28'
              />
            </button>
            {openIndex === index && (
              <p className='accordion__item__body'>{desc}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
