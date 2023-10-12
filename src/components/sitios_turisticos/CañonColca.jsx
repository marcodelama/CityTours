import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/createClient';
import Sitios from '../Sitios';

function CañonColca() {
    const [datosColca, setDatosColca] = useState(null);

    async function fetchColca() {
        const { data: sitiosData } = await supabase
            .from('sitios_turisticos')
            .select('*, region: id_region (nombre)')
            .eq('nombre', 'Cañón del Colca');
        
        if (sitiosData && sitiosData.length > 0) {
            const sitio = sitiosData[0];
            
            const { data: paquetesData } = await supabase
                .from('paquetes_turisticos')
                .select('*')
                .eq('id_sitios', sitio.id_sitios);
    
            setDatosColca({
                ...sitio,
                paquetes: paquetesData
            });
        }
    }

    useEffect(() => {
        fetchColca();
    }, []);

    if (!datosColca) {
        return <div>Cargando información...</div>;
    }

    return (
        <Sitios
            titulo={datosColca.nombre}
            region={datosColca.region ? datosColca.region.nombre : 'Desconocido'}
            descripcion={datosColca.descripcion}
            imagen={datosColca.imagen}
            precio={datosColca.precio_entrada}
            paquetes={datosColca.paquetes}
        />
    )
}

export default CañonColca;