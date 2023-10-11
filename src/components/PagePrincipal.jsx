import React from 'react';
import { Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import Header from './Header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Estilos/Login.css';
import Slider1 from '../img/Slider1.png';
import Slider2 from '../img/Slider2.png';
import Slider3 from '../img/Slider3.png';
import Slider4 from '../img/Slider4.png';
import Slider5 from '../img/Slider5.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Estilos/PagePrincipal.css';
import LagunaHuachina from './LagunaHuacachina';
import Footer from './Footer';

function Login() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <>
            <div className='Body'>
                <Header />
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <div className="mx-auto">
                                <Form inline>
                                    <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                                    <Button variant="outline-success">Buscar</Button>
                                </Form>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="SliderContainer">
                    <Slider {...settings}>
                        <div>
                            <img className='SliderImg' src={Slider1} alt="Slider1" />
                        </div>
                        <div>
                            <img className='SliderImg' src={Slider2} alt="Slider2" />
                        </div>
                        <div>
                            <img className='SliderImg' src={Slider3} alt="PlazaArequipa" />
                        </div>
                        <div>
                            <img className='SliderImg' src={Slider4} alt="PlazaArequipa" />
                        </div>
                        <div>
                            <img className='SliderImg' src={Slider5} alt="PlazaArequipa" />
                        </div>
                    </Slider>
                </div>
                <LagunaHuachina />
                <Footer />
            </div>
        </>
    );
}

export default Login;