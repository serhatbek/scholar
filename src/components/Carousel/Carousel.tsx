import './Carousel.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Icon } from '..';
import { ReactNode } from 'react';

interface CarouselProps {
  className: string;
  children: ReactNode;
}

interface CustomArrowProps {
  btnClass: string;
  onClick: () => void;
}

const Carousel = ({ className, children }: CarouselProps) => {
  const CustomNextArrow = ({ btnClass, onClick }: CustomArrowProps) => {
    return (
      <button className={btnClass} onClick={onClick}>
        <Icon icon='chevron-right' size='32' />
      </button>
    );
  };

  const CustomPrevArrow = ({ btnClass, onClick }: CustomArrowProps) => {
    return (
      <button className={btnClass} onClick={onClick}>
        <Icon icon='chevron-left' size='32' />
      </button>
    );
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow btnClass='' onClick={() => {}} />,
    prevArrow: <CustomPrevArrow btnClass='' onClick={() => {}} />,
  };

  return (
    <div className={`slider-container ${className}`}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Carousel;
