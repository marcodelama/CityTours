import React from 'react';
import Header from './Header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Estilos/Login.css';
import PlazaArequipa from '../img/PlazaArequipa.jpg';
import Slider1 from '../img/Slider1.png';
import Slider2 from '../img/Slider2.png';
import Slider3 from '../img/Slider3.png';


import 'bootstrap/dist/css/bootstrap.min.css';



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
  <Header />
  <div className="SliderContainer">
    <Slider {...settings}>
      <div>
        <img className='SliderImg' src={Slider1} alt="Slider1" />
      </div>
      <div>
        <img className='SliderImg' src={Slider2} alt="Slider2" />
      </div>
      <div>
        <img className='SliderImg' src={Slider3} alt="Slider3" />
      </div>
    </Slider>
  </div>
</div>
    </>
  );
}

export default Login;