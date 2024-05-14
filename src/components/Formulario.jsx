import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { EnvelopeFill, PersonFill, TelephoneFill, ChatDotsFill } from 'react-bootstrap-icons';

export const Formulario = () => {
    return (
        <Container fluid className='formulario'>
            <Container>
                <h2>Contáctanos</h2>
                <Form>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formName">
                                <Form.Control className='form-input' type="text" placeholder="Nombre" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formEmail">
                                <Form.Control className='form-input' type="email" placeholder="Correo Electrónico" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formPhone">
                                <Form.Control className='form-input' type="tel" placeholder="Teléfono" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formSubject">
                                <Form.Control className='form-input' type="text" placeholder="Asunto" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group controlId="formMessage">
                        <Form.Control className='form-input' as="textarea" rows={4} placeholder="Mensaje" />
                    </Form.Group>
                    <Button variant="primary" type="submit"><ChatDotsFill className="mr-2 mb-1" /> Enviar Mensaje</Button>
                </Form>
            </Container>
        </Container>
    );
};
