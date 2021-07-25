import React from 'react';
import SliderLib from 'react-slick';
// styles
import '../styles/slider.scss';

const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Slider = ({ type = 'image', images }) => (
  <SliderLib {...settings} className="slider">
    {type === 'image' ? (
      images.map((image, index) => (
        <div className="slider__image">
          <img src={image.url} alt={`Imagem ${index + 1}`} />
        </div>
      ))
    ) : (
      <div>
        <h1>1</h1>
      </div>
    )}
  </SliderLib>
);

export { Slider };
