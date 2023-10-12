import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/createClient';
import Sitios from '../Sitios';

function Kuelap() {
    const [datosKuelap, setDatosKuelap] = useState(null);

    async function fetchKuelap() {
        const { data } = await supabase
            .from('sitios_turisticos')
            .select(`
            nombre, 
            descripcion, 
            imagen, 
            precio_entrada,
            region: id_region (nombre)
        `)
            .eq('nombre', 'Fortaleza de Kuélap');
        
        if (data && data.length > 0) {
            setDatosKuelap(data[0]);
            console.log("DATOSSSSSSS", data)
        }
    }

    useEffect(() => {
        fetchKuelap();
    }, []);

    if (!datosKuelap) {
        return <div>Cargando información...</div>;
    }

    return (
        <Sitios
            titulo={datosKuelap.nombre}
            region={datosKuelap.region ? datosKuelap.region.nombre : 'Desconocido'}
            descripcion={datosKuelap.descripcion}
            imagen={datosKuelap.imagen}
            precio={datosKuelap.precio_entrada}
        />
    )
}

export default Kuelap;