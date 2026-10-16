import axios from 'axios';
import React, { Component } from 'react'
import Global from '../Global';

export default class InsertCoche extends Component {

    cajaId = React.createRef();
    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();
    cajaImagen = React.createRef();

    insertarCoche = (event) => {
        event.preventDefault;

        let coche = {
            idCoche: parseInt(this.cajaId.current.value),
            marca: this.cajaMarca.current.value,
            modelo: this.cajaModelo.current.value,
            conductor: this.cajaConductor.current.value,
            imagen: this.cajaImagen.current.value
        }

        axios.post(Global.urlApiCoches)
    }

    render() {
        return (
            <div>
                <h1>Insertar Coche</h1>
            </div>
        )
    }
}
