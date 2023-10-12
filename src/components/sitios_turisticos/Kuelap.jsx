import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/createClient';
import Sitios from '../Sitios';

function Kuelap() {
    const [datosKuelap, setDatosKuelap] = useState(null);

    async function fetchKuelap() {
        const { data: sitiosData } = await supabase
            .from('sitios_turisticos')
            .select('*, region: id_region (nombre)')
            .eq('nombre', 'Fortaleza de Kuélap');
        
        if (sitiosData && sitiosData.length > 0) {
            const sitio = sitiosData[0];
            
            const { data: paquetesData } = await supabase
                .from('paquetes_turisticos')
                .select('*')
                .eq('id_sitios', sitio.id_sitios);
    
            setDatosKuelap({
                ...sitio,
                paquetes: paquetesData
            });
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
            paquetes={datosKuelap.paquetes}
        />
    )
}

export default Kuelap;