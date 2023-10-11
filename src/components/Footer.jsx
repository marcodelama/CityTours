import React from 'react';
import '../Estilos/Footer.css'


function Footer() {
    return (
        <div>
            <div className="footer-content">
                
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
                    <ul className='flex'>
                        <li><a href="#"><i class="pi pi-facebook mr-2"></i>Facebook</a></li>
                        <li><a href="#"><i class="pi pi-instagram mr-2"></i>Instagram</a></li>
                        <li><a href="#"><i class="pi pi-twitter mr-2"></i>Twitter</a></li>
                    </ul>
                </div>
                <div className="contact-info">
                    <h4>Contacto</h4>
                    <div>
                        123 City St, Ciudad, País
                        Tel: (123) 456-7890
                        Email: info@citytours.com
                    </div>
                </div>
            </div>
            <div className="footer-bottom flex align-items-center justify-content-center">

                <p className=''>© 2023 CityTours. Todos los derechos reservados.</p>
            </div>
        </div>
    )
}

export default Footer;