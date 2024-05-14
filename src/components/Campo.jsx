import React from 'react';
import { Col, Form } from 'react-bootstrap';

export const Campo = ({ controlId, type, placeholder }) => {
    return (
        <Col md={6}>
            <Form.Group controlId={controlId}>
                <Form.Control className='form-input' type={type} placeholder={placeholder} />
            </Form.Group>
        </Col>
    );
};
