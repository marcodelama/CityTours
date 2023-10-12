import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/createClient';
import Sitios from '../Sitios';

function ChanChan() {
    const [datosChanChan, setDatosChanChan] = useState(null);

    async function fetchChanChan() {
        const { data: sitiosData } = await supabase
            .from('sitios_turisticos')
            .select('*, region: id_region (nombre)')
            .eq('nombre', 'Zona Arqueológica Chan Chan');
        
        if (sitiosData && sitiosData.length > 0) {
            const sitio = sitiosData[0];
            
            const { data: paquetesData } = await supabase
                .from('paquetes_turisticos')
                .select('*')
                .eq('id_sitios', sitio.id_sitios);
    
            setDatosChanChan({
                ...sitio,
                paquetes: paquetesData
            });
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
            paquetes={datosChanChan.paquetes}
        />
    )
}

export default ChanChan;