import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/createClient';
import Sitios from '../Sitios';

function ChanChan() {
    const [datosChanChan, setDatosChanChan] = useState(null);

    async function fetchChanChan() {
        const { data } = await supabase
            .from('sitios_turisticos')
            .select(`
            nombre, 
            descripcion, 
            imagen, 
            precio_entrada,
            region: id_region (nombre)
        `)
            .eq('nombre', 'Zona Arqueológica Chan Chan');
        
        if (data && data.length > 0) {
            setDatosChanChan(data[0]);
        }
    }

    useEffect(() => {
        fetchChanChan();
    }, []);

    if (!datosChanChan) {
        return <div>Cargando información...</div>;
    }

    return (
        <Sitios
            titulo={datosChanChan.nombre}
            region={datosChanChan.region ? datosChanChan.region.nombre : 'Desconocido'}
            descripcion={datosChanChan.descripcion}
            imagen={datosChanChan.imagen}
            precio={datosChanChan.precio_entrada}
        />
    )
}

export default ChanChan;