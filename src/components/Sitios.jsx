import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase/createClient';

function Sitios({ titulo, region, descripcion, imagen, precio }) {
    return (
        <div className='flex justify-content-center'>
            <div>
                <h1>{titulo}</h1>
                <div>{region}</div>
                <div>{descripcion}</div>
            </div>
            <div className=''>
                <img src={imagen} alt={titulo} />
                <div>{precio}</div>
            </div>
        </div>

    )
}

export default Sitios;