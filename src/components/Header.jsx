import React from "react";
import '../Estilos/header.css';

function Header() {
    return (
        <div className="header">
            <div className="icono">
                <i className="pi pi-globe flex justify-content-center"></i>
            </div>

            <div>CityTours</div>
            <ul>
                <li>Viajes/Lugares</li>
                <li>Mis Reservas</li>
                <li>Comentarios</li>
                <li>Nosotros</li>
                <li>Contacto</li>
            </ul>
        </div>
    )
}

export default Header;