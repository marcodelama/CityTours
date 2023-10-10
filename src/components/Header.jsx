import React from "react";
import '../Estilos/header.css';

function Header() {
    return (
        <div className="header flex justify-content-between align-items-center espacio-horizontal">
            <div className="flex align-items-center">
                <div className="icono">
                    <i className="pi pi-prime flex justify-content-center"></i>
                </div>
                <div className="titulo">CityTours</div>
            </div>
            <ul>
                <li><i class="pi pi-map"></i>Viajes/Lugares</li>
                <li><i className="pi pi-calendar"></i>Mis Reservas</li>
                <li><i className="pi pi-comments"></i>Comentarios</li>
                <li><i className="pi pi-users"></i>Nosotros</li>
                <li><i className="pi pi-phone"></i>Contacto</li>
            </ul>
        </div>
    )
}

export default Header;