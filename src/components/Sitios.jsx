import React, { useEffect } from 'react';
import '../Estilos/DiseñoSitios.css';
import Boton from './sitios_turisticos/Boton';


function Sitios({ titulo, region, descripcion, imagen, precio, paquetes, platos }) {
    return (
        <>
            <div className='flex justify-content-center gap-3 p-8 bg'>
                <div className='flex align-items-center row w-full'>
                    <div className='center mb-5'>
                        <h1><span className="colorExplora">Explora </span>{titulo}</h1>
                        <h2 className={region && region.length > 6 ? 'bg-rojo' : 'bg-verde'}>{region}</h2>
                    </div>
                    <div className='font-24 mb-5'>{descripcion}</div>
                    <div className='font-20'><b>Precio del viaje (Ida/Vuelta): S/.{precio}</b>
                        <Boton />
                    </div>
                </div>
                <div className='w-full flex align-items-center '>
                    <img src={imagen} alt={titulo} style={{ width: "100%" }} />

                </div>
            </div>

            <div className='flex row justify-content-around'>
                <div className='flex justify-content-center mb-5 bg-verde w-6'>PAQUETES</div>
                <div className='flex row w-6'>
                    {paquetes && paquetes.map(paquete => (
                        <div key={paquete.id_paquete} className='paquete-contenedor'>
                            <img src={paquete.imagenes} className='paquete-imagen' />
                            <h3 className="paquete-nombre">{paquete.nombre}</h3>
                            <p>{paquete.descripcion}</p>
                            <p><b>Precio: S/.</b>{paquete.precio}</p>
                            <p><b>Desde: </b>{paquete.fecha_inicio}</p>
                            <p><b>Hasta: </b>{paquete.fecha_fin}</p>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}

export default Sitios;