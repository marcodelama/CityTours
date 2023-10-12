import React, {useState, useEffect} from 'react';
import { supabase } from '../../supabase/createClient';
import Sitios from '../Sitios';

function Plaza(){
    const [datosPlaza, setDatosPlaza] = useState(null);

    async function fetchPlaza() {
        const { data: sitiosData } = await supabase
            .from('sitios_turisticos')
            .select('*, region: id_region (nombre)')
            .eq('nombre', 'Plaza de Armas de Cusco');
        
        if (sitiosData && sitiosData.length > 0) {
            const sitio = sitiosData[0];
            
            const { data: paquetesData } = await supabase
                .from('paquetes_turisticos')
                .select('*')
                .eq('id_sitios', sitio.id_sitios);
    
            setDatosPlaza({
                ...sitio,
                paquetes: paquetesData
            });
        }
    }

    useEffect(() => {
        fetchPlaza();
    }, []);

    if (!datosPlaza) {
        return <div>Cargando información...</div>;
    }

    return (
        <Sitios
            titulo={datosPlaza.nombre}
            region={datosPlaza.region ? datosPlaza.region.nombre : 'Desconocido'}
            descripcion={datosPlaza.descripcion}
            imagen={datosPlaza.imagen}
            precio={datosPlaza.precio_entrada}
            paquetes={datosPlaza.paquetes}
        />
    )
}

export default Plaza;