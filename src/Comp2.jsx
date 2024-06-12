import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Comp2({ datauser }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {datauser.map((item, index) => (
        <div key={index}>
          <div style={{ backgroundColor: '' }} className='text-center m-5 '>
            <div style={{ padding: '50px', border: '1px solid' }}>
              <h1>{item.first_name}</h1>
              <p>{item.last_name}</p>
              <p>{item.email}</p>
              <p>{item.gender}</p>
              <p>{item.ip_address}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default Comp2;
