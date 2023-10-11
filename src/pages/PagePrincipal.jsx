import React from 'react';
import Header from './Header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Estilos/PagePrincipal.css';
import PlazaArequipa from '../img/PlazaArequipa.jpg';
import Slider1 from '../img/Slider1.png';
import Slider2 from '../img/Slider2.png';
import LagunaHuachina from './LagunaHuacachina';
import Footer from './Footer';



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
                            <img className='SliderImg' src={PlazaArequipa} alt="PlazaArequipa" />
                        </div>
                    </Slider>
                </div>
                <LagunaHuachina/>
                <Footer/> 
            </div>
        </>
    );
}

export default Login;