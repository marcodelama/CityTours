import React from "react";
import '../Estilos/header.css';

function Header() {
    return (
        <div className="header flex justify-content-between align-items-center espacio-horizontal">
            <div className="flex align-items-center">
                <div className="icono">
                    <i className="pi pi-prime flex justify-content-center"></i>
                </div>
                <div className="titulo"><a href="">CityTours</a></div>
            </div>
            <ul className="flex align-items-center header-nav">
                <li><i class="pi pi-map pr-2"></i><a href="">Viajes/Lugares</a></li>
                <li><i className="pi pi-calendar pr-2"></i><a href="">Mis Reservas</a></li>
                <li><i className="pi pi-comments pr-2"></i><a href="">Comentarios</a></li>
                <li><a className="black" href="">Contacto</a></li>
                <li><i className="pi pi-users pr-2"></i><a href="">Nosotros</a></li>
            </ul>
        </div>
    )
}

export default Header;