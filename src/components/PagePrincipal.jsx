import React from 'react';
import Header from './Header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Estilos/Login.css';
import machupicchu from '../img/machupicchu.jpg';
import vinicuna from '../img/vinicunca.jpg';
import PlazaArequipa from '../img/PlazaArequipa.jpg';

function Login() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Mostrar una imagen a la vez
    slidesToScroll: 1,
    autoplay: true, // Activa la reproducción automática
    autoplaySpeed: 2000, // Establece el tiempo de intervalo en milisegundos (2 segundos en este caso)
  };

  return (
    <>
      <div className='Body'>
        <h1>Holaa</h1>
        <Slider {...settings}>
          <div>
            <img className='SliderImg' src={machupicchu} alt="machupicchu" />
          </div>
          <div>
            <img className='SliderImg' src={vinicuna} alt="vinicuna" />
          </div>
          <div>
            <img className='SliderImg' src={PlazaArequipa} alt="PlazaArequipa" />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Login;