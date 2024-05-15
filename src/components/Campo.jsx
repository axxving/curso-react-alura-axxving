import React from 'react';
import { Col, Form } from 'react-bootstrap';

export const Campo = ({ controlId, type, placeholder, titulo }) => {
    return (
        <Col md={6}>
            <Form.Group controlId={controlId}>
                <Form.Control titulo={titulo} className='form-input' type={type} placeholder={placeholder} required />
            </Form.Group>
        </Col>
    );
};
