import React from "react";
import { Button } from 'primereact/button'
function Header() {
    return (
        <div className="flex">
            <i class="pi pi-check"></i>
            <div>CityTours</div>
            <ul className="flex">
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