import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { ChatDotsFill } from 'react-bootstrap-icons';
import { Campo } from './Campo';
import { ListaOpciones } from './listaOpciones/ListaOpciones';
import { Boton } from './listaOpciones/Boton';

export const Formulario = () => {

    const manejarEnvio = (e) => {
        console.log('Manejar el envio', e);
        // Evitando el envio del formulario
        e.preventDefault();
    }

    return (
        <Container fluid className='formulario'>
            <Container>
                <h2>Contáctanos</h2>
                <Form onSubmit={manejarEnvio}>
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
                    <Row>
                        <ListaOpciones />
                    </Row>
                    <Boton title={"Generar"}>
                    </Boton>
                </Form>
            </Container>
        </Container>
    );
};
