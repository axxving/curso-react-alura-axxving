import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { ChatDotsFill } from 'react-bootstrap-icons';
import { Campo } from './Campo';

export const Formulario = () => {
    return (
        <Container fluid className='formulario'>
            <Container>
                <h2>Contáctanos</h2>
                <Form>
                    <Row>
                        <Campo controlId="formName" type="text" placeholder="Nombre" />
                        <Campo controlId="formEmail" type="email" placeholder="Correo Electrónico" />
                    </Row>
                    <Row>
                        <Campo controlId="formPhone" type="tel" placeholder="Puesto" />
                        <Campo controlId="formSubject" type="text" placeholder="Foto" />
                    </Row>
                    <Form.Group controlId="formMessage">
                        <Form.Control className='form-input' as="textarea" rows={4} placeholder="Mensaje" />
                    </Form.Group>
                    <Button variant="primary" type="submit"><ChatDotsFill className="mr-2 mb-1" /> Generar</Button>
                </Form>
            </Container>
        </Container>
    );
};
