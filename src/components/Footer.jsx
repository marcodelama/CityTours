import React from 'react';
import '../Estilos/Footer.css'

function Footer() {
    return (
        <div>
            <div className="footer-content gap-7">
                
                <div className="branding">
                    <h3>CityTours</h3>
                    <p>Explora. Vive. Recuerda.</p>
                </div>
                <nav>
                    <ul className="footer-nav">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Tours</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
                <div className="socials">
                    <h4>Síguenos</h4>
                    <ul>
                        <li><a href="#"><i className="pi pi-facebook mr-2"></i>Facebook</a></li>
                        <li><a href="#"><i className="pi pi-instagram mr-2"></i>Instagram</a></li>
                        <li><a href="#"><i className="pi pi-twitter mr-2"></i>Twitter</a></li>
                    </ul>
                </div>
                <div className="contact-info">
                    <h4>Contacto</h4>
                    <div>
                        En una Galaxía, muy, muy lejana...
                    </div>
                    <p>916391110 | Atención de lunes a sábado</p>
                </div>
            </div>
            <div className="footer-bottom flex align-items-center justify-content-center">

                <p className=''>© 2023 CityTours. Todos los derechos reservados.</p>
            </div>
        </div>
    )
}

export default Footer;