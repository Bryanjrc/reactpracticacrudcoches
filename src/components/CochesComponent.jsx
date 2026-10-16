import axios from 'axios';
import React, { Component } from 'react';
import Global from '../Global';

export default class CochesComponent extends Component {

    state = {
        coches: []
    }

    laodCoches = () => {
        let request = "api/coches";

        axios.get(Global.urlApiCoches + request).then((response) => {
            this.setState({
                coches: response.data
            })
        });
    }

    componentDidMount = () => {
        this.laodCoches();
    }

    render() {
        return (
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="border-b border-gray-200 pb-4 mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">Gestión de Vehículos</h1>
                    <p className="text-sm text-gray-500 mt-1">Listado completo de coches disponibles en el sistema</p>
                </div>

                <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th scope="col" className="px-6 py-4 font-semibold text-center w-16">Id</th>
                                <th scope="col" className="px-6 py-4 font-semibold">Marca</th>
                                <th scope="col" className="px-6 py-4 font-semibold">Modelo</th>
                                <th scope="col" className="px-6 py-4 font-semibold">Conductor</th>
                                <th scope="col" className="px-6 py-4 font-semibold text-center w-32">Imagen</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200 bg-white">
                            {
                                this.state.coches.map((coche, index) => {
                                    return (
                                        <tr key={index} className="hover:bg-gray-50/70 transition-colors">
                                            <td className="px-6 py-4 font-mono font-medium text-gray-900 text-center bg-gray-50/50">
                                                {coche.idCoche}
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900">
                                                {coche.marca}
                                            </td>
                                            <td className="px-6 py-4 text-gray-700">
                                                {coche.modelo}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                                    {coche.conductor}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 flex justify-center items-center">
                                                <div className="h-14 w-24 overflow-hidden rounded-md border border-gray-200 bg-gray-50 flex items-center justify-center">
                                                    <img 
                                                        src={coche.imagen} 
                                                        alt={`${coche.marca} ${coche.modelo}`}
                                                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                                                        onError={(e) => { 
                                                            e.target.src = "https://placehold.co"; 
                                                        }}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                {this.state.coches.length === 0 && (
                    <div className="text-center py-12 text-gray-400">
                        <p className="text-base font-medium">Buscando coches en la base de datos...</p>
                    </div>
                )}
            </div>
        )
    }
}
