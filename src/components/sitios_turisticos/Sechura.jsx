import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/createClient';
import Sitios from '../Sitios';

function Sechura() {
    const [datosSechura, setDatosSechura] = useState(null);

    async function fetchSechura() {
        const { data: sitiosData } = await supabase
            .from('sitios_turisticos')
            .select('*, region: id_region (nombre)')
            .eq('nombre', 'Desierto de Sechura');
        
        if (sitiosData && sitiosData.length > 0) {
            const sitio = sitiosData[0];
            
            const { data: paquetesData } = await supabase
                .from('paquetes_turisticos')
                .select('*')
                .eq('id_sitios', sitio.id_sitios);
    
            setDatosSechura({
                ...sitio,
                paquetes: paquetesData
            });
        }
    }

    useEffect(() => {
        fetchSechura();
    }, []);

    if (!datosSechura) {
        return <div>Cargando información...</div>;
    }

    return (
        <Sitios
            titulo={datosSechura.nombre}
            region={datosSechura.region ? datosSechura.region.nombre : 'Desconocido'}
            descripcion={datosSechura.descripcion}
            imagen={datosSechura.imagen}
            precio={datosSechura.precio_entrada}
            paquetes={datosSechura.paquetes}
        />
    )
}

export default Sechura;