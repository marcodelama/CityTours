import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/createClient';
import Sitios from '../Sitios';

function ChavinHuantar() {
    const [datosChavinHuantar, setDatosChavinHuantar] = useState(null);

    async function fetchChavinHuantar() {
        const { data: sitiosData } = await supabase
            .from('sitios_turisticos')
            .select('*, region: id_region (nombre)')
            .eq('nombre', 'Chavín de Huantar');
        
        if (sitiosData && sitiosData.length > 0) {
            const sitio = sitiosData[0];
            
            const { data: paquetesData } = await supabase
                .from('paquetes_turisticos')
                .select('*')
                .eq('id_sitios', sitio.id_sitios);
    
            setDatosChavinHuantar({
                ...sitio,
                paquetes: paquetesData
            });
        }
    }

    useEffect(() => {
        fetchChavinHuantar();
    }, []);

    if (!datosChavinHuantar) {
        return <div>Cargando información...</div>;
    }

    return (
        <Sitios
            titulo={datosChavinHuantar.nombre}
            region={datosChavinHuantar.region ? datosChavinHuantar.region.nombre : 'Desconocido'}
            descripcion={datosChavinHuantar.descripcion}
            imagen={datosChavinHuantar.imagen}
            precio={datosChavinHuantar.precio_entrada}
            paquetes={datosChavinHuantar.paquetes}
        />
    )
}

export default ChavinHuantar;