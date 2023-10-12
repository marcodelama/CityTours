import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase/createClient';
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
import Sitios from './Sitios';
import Footer from './Footer';
import { Dropdown } from 'primereact/dropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Estilos/PagePrincipal.css';
import Huacachina from './sitios_turisticos/Huacachina';
import Titicaca from './sitios_turisticos/Titicaca';
import CañonColca from './sitios_turisticos/CañonColca';
import MacchuPicchu from './sitios_turisticos/MacchuPicchu';
import Plaza from './sitios_turisticos/Plaza';
import ChanChan from './sitios_turisticos/ChanChan';
import Sechura from './sitios_turisticos/Sechura';
import Kuelap from './sitios_turisticos/Kuelap';
import ChavinHuantar from './sitios_turisticos/ChavinHuantar';
import LineasNazca from './sitios_turisticos/LineasNazca';

function PagePrincipal() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const [selectedLugar, setSelectedLugar] = useState(null)
    const [lugares, setLugares] = useState([]);

    async function fetchLugares() {
        const { data } = await supabase
            .from('sitios_turisticos')
            .select('*')
        setLugares(data)
        console.log("LUGARESSSSSS", data)
    }

    const opcionesLugares = lugares?.map((item) => (
        { nombre: item.nombre, code: item.id_sitios }
    ))

    useEffect(() => {
        fetchLugares()
    }, [])

    return (
        <>
            <div className='Body'>
                {/* <Navbar bg="light" expand="lg">
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
                </Navbar> */}
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
                <div className='flex justify-content-around row mt-5 w-full'>
                    <Dropdown
                        value={selectedLugar}
                        options={opcionesLugares}
                        optionLabel='nombre'
                        placeholder="Selecciona un lugar"
                        onChange={(e) => setSelectedLugar(e.value)}
                        style={{ height: "50px", width: "20%", marginBottom: "30px" }} />
                </div>
                {
                    selectedLugar && selectedLugar.nombre === "Laguna Huacachina" && <Huacachina />
                }
                {
                    selectedLugar && selectedLugar.nombre === "Lago Titicaca" && <Titicaca/>
                }
                
                {
                    selectedLugar && selectedLugar.nombre === "Cañón del Colca" && <CañonColca />
                }
                {
                    selectedLugar && selectedLugar.nombre === "Macchu Picchu" && <MacchuPicchu/>
                }
                {
                    selectedLugar && selectedLugar.nombre === "Plaza de Armas de Cusco" && <Plaza/>
                }
                {
                    selectedLugar && selectedLugar.nombre === "Zona Arqueológica Chan Chan" && <ChanChan />
                }
                {
                    selectedLugar && selectedLugar.nombre === "Fortaleza de Kuélap" && <Kuelap />
                }
                {
                    selectedLugar && selectedLugar.nombre === "Desierto de Sechura" && <Sechura />
                }
                {
                    selectedLugar && selectedLugar.nombre === "Chavín de Huantar" && <ChavinHuantar />
                }
                {
                    selectedLugar && selectedLugar.nombre === "Líneas de Nazca" && <LineasNazca />
                }
                <Footer />
            </div>
        </>
    );
}

export default PagePrincipal;