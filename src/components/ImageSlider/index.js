import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  const images = [
    'https://res.cloudinary.com/detqp9dxl/image/upload/v1717376780/1_qaxcs9.png',
    'https://res.cloudinary.com/detqp9dxl/image/upload/v1717376781/2_du9r0v.png',
    'https://res.cloudinary.com/detqp9dxl/image/upload/v1717376781/3_xobr0b.png',
  ]

  return (
    <div className="slider-container" style={{width: '800px', margin: 'auto'}}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="ima">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{width: '30%'}}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ImageSlider
