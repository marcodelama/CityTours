import React from "react";
import '../Estilos/header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header flex justify-content-between align-items-center espacio-horizontal">
            <div className="flex align-items-center">
                <div className="icono">
                    <i className="pi pi-prime flex justify-content-center"></i>
                </div>
                <div className="titulo"><Link to="/">CityTours</Link></div>
            </div>
            <ul className="header-nav0">
  <li className="nav-item"><i className="pi pi-map pr-2"></i><a href="">Viajes/Lugares</a></li>
  <li className="nav-item"><i className="pi pi-calendar pr-2"></i><Link to="/reservas">Mis Reservas</Link></li>
  <li className="nav-item"><i className="pi pi-comments pr-2"></i><a href="">Comentarios</a></li>
  <li className=""><a className="black" href="">Contacto</a></li>
  <li className="nav-item"><i className="pi pi-users pr-2"></i><a href="">Nosotros</a></li>
</ul>
        </div>
    )
}

export default Header;