import React, { useState, useEffect } from 'react';
import '../Estilos/DiseñoSitios.css';

function Sitios({ titulo, region, descripcion, imagen, precio }) {
    return (
        <div className='flex justify-content-center gap-3 p-8'>
            <div className='flex align-items-center row w-full'>
                <div className='center'>
                    <h1 className='borde'>{titulo}</h1>
                    <h2 className={region && region.length > 6 ? 'bg-rojo' : 'bg-verde'}>{region}</h2>
                </div>
                <div className='font-24'>{descripcion}</div>
                <div className='font-20'><b>Precio del viaje (Ida/Vuelta): S/.{precio}</b></div>
            </div>
            <div className='w-full'>
                <img src={imagen} alt={titulo} style={{ width: "100%" }} />
            </div>
        </div>

    )
}

export default Sitios;