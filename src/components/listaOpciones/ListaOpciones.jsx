import React from 'react';
import { Form } from 'react-bootstrap';

export const ListaOpciones = () => {


    // Metodo Map -> arreglo.map( (equipo, index) => {
    //     return <opcion key={index}>{equipo}</option>
    //})
    const equipos = [
        "Selecciona",
        "Diseño",
        "Frontend",
        "Backend",
        "Fullstack",
        "Mobile",
        "UI/UX",
    ];

    return (
        <Form.Group className='listaOpciones' controlId="opciones">
            <Form.Label>Equipos</Form.Label>
            <Form.Control as="select">
                {
                    equipos.map((equipo, index) =>
                        <option key={index}>{equipo}</option>
                    )
                }
            </Form.Control>
        </Form.Group>
    );
};
