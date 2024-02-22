import './TestimonialCard.scss';

interface TestimonialCardProps {
  item: {
    text: string;
    img: string;
    job: string;
    name: string;
  };
}

const TestimonialCard = ({ item }: TestimonialCardProps) => {
  const { text, img, job, name } = item;
  return (
    <div className='testimonial__card'>
      <p>{text}</p>
      <div>
        <figure>
          <img src={img} alt='' />
        </figure>
        <div>
          <span>{job}</span>
          <h4>{name}</h4>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
