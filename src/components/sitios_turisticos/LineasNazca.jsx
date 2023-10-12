import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/createClient';
import Sitios from '../Sitios';

function LineasNazca() {
    const [datosLineasNazca, setDatosLineasNazca] = useState(null);

    async function fetchLineasNazca() {
        const { data: sitiosData } = await supabase
            .from('sitios_turisticos')
            .select('*, region: id_region (nombre)')
            .eq('nombre', 'Líneas de Nazca');
        
        if (sitiosData && sitiosData.length > 0) {
            const sitio = sitiosData[0];
            
            const { data: paquetesData } = await supabase
                .from('paquetes_turisticos')
                .select('*')
                .eq('id_sitios', sitio.id_sitios);
    
            setDatosLineasNazca({
                ...sitio,
                paquetes: paquetesData
            });
        }
    }

    useEffect(() => {
        fetchLineasNazca();
    }, []);

    if (!datosLineasNazca) {
        return <div>Cargando información...</div>;
    }

    return (
        <Sitios
            titulo={datosLineasNazca.nombre}
            region={datosLineasNazca.region ? datosLineasNazca.region.nombre : 'Desconocido'}
            descripcion={datosLineasNazca.descripcion}
            imagen={datosLineasNazca.imagen}
            precio={datosLineasNazca.precio_entrada}
            paquetes={datosLineasNazca.paquetes}
        />
    )
}

export default LineasNazca;