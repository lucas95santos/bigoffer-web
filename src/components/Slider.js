import React from 'react';
import SliderLib from 'react-slick';
// icons
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
// styles
import '../styles/slider.scss';

const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
};

const PrevArrow = ({ className, style, onClick }) => (
  <HiOutlineChevronLeft
    className={`${className} prev-arrow`}
    style={{ ...style, fontSize: '32px !important' }}
    onClick={onClick}
  />
);

const NextArrow = ({ className, style, onClick }) => (
  <HiOutlineChevronRight
    className={`${className} prev-arrow`}
    style={{ ...style, fontSize: '32px !important' }}
    onClick={onClick}
  />
);

const Slider = ({ type = 'image', images, children, rest }) => {
  settings.arrows = type !== 'image';
  settings.dots = type === 'image';
  settings.slidesToShow = type === 'image' ? 1 : 2;
  settings.slidesToScroll = type === 'image' ? 1 : 2;
  settings.draggable = type === 'image';
  settings.prevArrow = <PrevArrow />;
  settings.nextArrow = <NextArrow />;

  return (
    <>
      {type === 'image' ? (
        <SliderLib {...settings} className="slider" {...rest}>
          {images.map((image, index) => (
            <div className="slider__image" key={image.id}>
              <img src={image.url} alt={`Imagem ${index + 1}`} />
            </div>
          ))}
        </SliderLib>
      ) : (
        <SliderLib {...settings} className="slider" {...rest}>
          {children}
        </SliderLib>
      )}
    </>
  );
};

export { Slider };
