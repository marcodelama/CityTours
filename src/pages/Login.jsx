import React from 'react';
import { UserAuth } from '../context/AuthContext'

function Login() {
    const { } = UserAuth();
    return (
        <div>Hola, soy una sección del proyecto</div>
    )
}

export default Login;