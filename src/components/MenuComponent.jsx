import { useState } from 'react';
// Importamos NavLink de react-router-dom
import { NavLink } from 'react-router-dom';

export default function MenuComponent() {
    const [isOpen, setIsOpen] = useState(false);

    // Definimos las rutas del CRUD de coches de forma estructurada
    const routes = [
        { to: '/coches', label: 'Coches' },
    ];

    // Función para asignar clases automáticas si la ruta está activa
    const navLinkStyles = ({ isActive }) =>
        `block py-2 px-3 rounded md:p-0 transition-colors ${isActive
            ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 font-semibold'
            : 'text-gray-950 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700'
        }`;

    return (
        <nav className="bg-white border-b border-gray-200 fixed w-full z-20 top-0 start-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                {/* Logo que redirige a la raíz */}
                <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-xl text-gray-950 font-semibold whitespace-nowrap">Crud Coches</span>
                </NavLink>

                {/* Botón menú hamburguesa (Móvil) */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://w3.org" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6M6 6l12 12" />
                        ) : (
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                        )}
                    </svg>
                </button>

                {/* Enlaces de Navegación Dinámicos */}
                <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                        {routes.map((route) => (
                            <li key={route.to}>
                                <NavLink
                                    to={route.to}
                                    className={navLinkStyles}
                                    onClick={() => setIsOpen(false)} // Cierra el menú móvil al hacer clic
                                >
                                    {route.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </nav>
    );
}
