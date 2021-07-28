import React, { useEffect, useState } from 'react';
import SliderLib from 'react-slick';
// icons
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
// styles
import '../styles/slider.scss';

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
  const [localSettings, setLocalSettings] = useState(null);

  useEffect(() => {
    setLocalSettings({
      infinite: true,
      speed: 500,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      arrows: type !== 'image',
      dots: type === 'image',
      slidesToShow: type === 'image' ? 1 : 2,
      slidesToScroll: type === 'image' ? 1 : 2,
      draggable: type === 'image',
    });

    if (type === 'item') {
      window.addEventListener('resize', checkWindowWidth, false);
    }

    return () => {
      window.removeEventListener('resize', checkWindowWidth, false);
    };
  }, []);

  const checkWindowWidth = () => {
    if (window.innerWidth < 700) {
      setLocalSettings((oldSettings) => ({
        ...oldSettings,
        slidesToShow: 1,
        slidesToScroll: 1,
      }));
    } else {
      setLocalSettings((oldSettings) => ({
        ...oldSettings,
        slidesToShow: 2,
        slidesToScroll: 2,
      }));
    }
  };

  return (
    <>
      {type === 'image' ? (
        <SliderLib {...localSettings} className="slider" {...rest}>
          {images.map((image, index) => (
            <div className="slider__image" key={image.id}>
              <img src={image.url} alt={`Imagem ${index + 1}`} />
            </div>
          ))}
        </SliderLib>
      ) : (
        <SliderLib {...localSettings} className="slider" {...rest}>
          {children}
        </SliderLib>
      )}
    </>
  );
};

export { Slider };
