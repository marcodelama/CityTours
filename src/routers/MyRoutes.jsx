import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from '../pages/Login';

export function MyRoutes(){

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    );
}