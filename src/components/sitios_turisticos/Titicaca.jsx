import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/createClient';
import Sitios from '../Sitios';

function Titicaca() {
    const [datosTiticaca, setDatosTiticaca] = useState(null);

    async function fetchTiticaca() {
        const { data: sitiosData } = await supabase
            .from('sitios_turisticos')
            .select('*, region: id_region (nombre)')
            .eq('nombre', 'Lago Titicaca');
        
        if (sitiosData && sitiosData.length > 0) {
            const sitio = sitiosData[0];
            
            const { data: paquetesData } = await supabase
                .from('paquetes_turisticos')
                .select('*')
                .eq('id_sitios', sitio.id_sitios);
    
            setDatosTiticaca({
                ...sitio,
                paquetes: paquetesData
            });
        }
    }

    useEffect(() => {
        fetchTiticaca();
    }, []);

    if (!datosTiticaca) {
        return <div>Cargando información...</div>;
    }

    return (
        <Sitios
            titulo={datosTiticaca.nombre}
            region={datosTiticaca.region ? datosTiticaca.region.nombre : 'Desconocido'}
            descripcion={datosTiticaca.descripcion}
            imagen={datosTiticaca.imagen}
            precio={datosTiticaca.precio_entrada}
            paquetes={datosTiticaca.paquetes}
        />
    )
}

export default Titicaca;