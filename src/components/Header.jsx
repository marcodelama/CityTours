import React from "react";

function Header() {
    return (
        <div className="flex">
            <i class="pi pi-globe" style={{fontSize: "1rem"}}></i>
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