import React from 'react';
import { Form } from 'react-bootstrap';

export const ListaOpciones = ({ valor, setEquipo }) => {

    const equipos = [
        "Diseño",
        "Frontend",
        "Backend",
        "Fullstack",
        "Mobile",
        "UI/UX",
    ];

    const manejarCambio = (e) => {
        setEquipo(e.target.value);
    }

    return (
        <Form.Group className='listaOpciones' controlId="opciones">
            <Form.Label>Equipos</Form.Label>
            <Form.Control 
                as="select" 
                value={valor}
                onChange={manejarCambio}
            >
                <option 
                    value=""
                    disabled 
                    defaultValue="" 
                    hidden 
                >
                    Seleccionar equipo
                </option>
                {
                    equipos.map((equipo, index) =>
                        <option key={index} value={equipo}>{equipo}</option>
                    )
                }
            </Form.Control>
        </Form.Group>
    );
};
