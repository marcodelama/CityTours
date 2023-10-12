import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/createClient';
import Sitios from '../Sitios';

function MacchuPicchu() {
    const [datosMP, setDatosMP] = useState(null);

    async function fetchMP() {
        const { data: sitiosData } = await supabase
            .from('sitios_turisticos')
            .select('*, region: id_region (nombre)')
            .eq('nombre', 'Macchu Picchu');
        
        if (sitiosData && sitiosData.length > 0) {
            const sitio = sitiosData[0];
            
            const { data: paquetesData } = await supabase
                .from('paquetes_turisticos')
                .select('*')
                .eq('id_sitios', sitio.id_sitios);
    
            setDatosMP({
                ...sitio,
                paquetes: paquetesData
            });
        }
    }

    useEffect(() => {
        fetchMP();
    }, []);

    if (!datosMP) {
        return <div>Cargando información...</div>;
    }

    return (
        <Sitios
            titulo={datosMP.nombre}
            region={datosMP.region ? datosMP.region.nombre : 'Desconocido'}
            descripcion={datosMP.descripcion}
            imagen={datosMP.imagen}
            precio={datosMP.precio_entrada}
            paquetes={datosMP.paquetes}
        />
    )
}

export default MacchuPicchu;