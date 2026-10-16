import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import MenuComponent from "./MenuComponent";
import CochesComponent from "./CochesComponent";

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                {/* El menú queda visible en todo momento */}
                <MenuComponent />

                {/* IMPORTANTE: Añadir 'pt-24' para desplazar verticalmente el 
                    contenido por debajo del Navbar que está flotando con 'fixed' */}
                <div className="pt-24 px-4 max-w-screen-xl mx-auto">
                    <Routes>
                        {/* Carga el listado si entras directamente a la web (localhost:3000) */}
                        <Route path="/" element={<CochesComponent />} />
                        
                        {/* Carga el listado al pulsar el NavLink del menú (/coches) */}
                        <Route path="/coches" element={<CochesComponent />} />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}
