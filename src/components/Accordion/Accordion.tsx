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
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={classNames('accordion__item', {
              open: isOpen,
            })}
          >
            <button
              className='accordion__item__header'
              onClick={() => AccordionToggle(index)}
            >
              <span>{title}</span>
              <Icon
                icon={classNames(`${isOpen ? 'minus' : 'plus'}`)}
                size='28'
              />
            </button>
            <p
              className='accordion__item__body'
              style={{ maxHeight: isOpen ? '1000px' : '0' }}
            >
              {desc}
            </p>
            {/* {isOpen && (
              <p className='accordion__item__body'>{desc}</p>
            )} */}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
