import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getImagesToShowInSlider, getImageUrl } from '@/api/image-api';

export default function FamilySlider() {
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getImagesToShowInSlider();
      setImages(data);
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };

  const styleImgSlider = {
    width: '100%',
    maxHeight: '70vh',
    height: 'auto',
    objectFit: 'contain',
    borderRadius: '8px',
    display: 'block',
    margin: '0 auto'
  };

  const styleDivSlider = {
    maxWidth: '100%',
    margin: '0 auto'
  };

  return (
    <div className="ulockd-home-slider" style={{ paddingTop: '150px' }}>
      <div className="container-fluid w-[95%]">
        <div className="row">
          <Slider {...settings} className="w-100">
            {images.map((image) => (
              <div key={image.id}>
                <div className="slider-slide" style={styleDivSlider}>
                  <img
                    src={getImageUrl(image.url)}
                    alt="Slider"
                    style={styleImgSlider}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
