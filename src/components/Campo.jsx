import { React, useState } from 'react';
import { Col, Form } from 'react-bootstrap';

export const Campo = ({ controlId, type, placeholder, valorr, titulo, required, setValor }) => {

    const manejarCambio = (e) => {
        setValor(e.target.value);
    }

    return (
        <Col md={6}>
            <Form.Group controlId={controlId}>
                <Form.Control 
                    titulo={titulo} 
                    className='form-input' 
                    type={type} 
                    placeholder={placeholder} 
                    required={required}
                    value={valorr}
                    onChange={manejarCambio}
                />
            </Form.Group>
        </Col>
    );
};
