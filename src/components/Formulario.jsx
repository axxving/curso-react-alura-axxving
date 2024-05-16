import React from 'react';
import { Container, Row, Form } from 'react-bootstrap';
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
                <h2 className='title m-mb-2'>Agregar un nuevo trabajador</h2>
                <Form onSubmit={manejarEnvio}>
                    <Row>
                        <Campo
                            titulo="Nombre"
                            controlId="formName"
                            type="text"
                            placeholder="Nombre"
                            required
                        />
                        <Campo
                            titulo="Apellido"
                            controlId="formSubject"
                            type="text"
                            placeholder="Apellido"
                            required
                        />
                    </Row>
                    <Row>
                        <Campo
                            titulo="Foto"
                            controlId="formSubject"
                            type="text"
                            placeholder="Foto"
                            required
                        />
                        <Campo
                            titulo="Puesto"
                            controlId="formPhone"
                            type="tel"
                            placeholder="Puesto"
                            required
                        />
                    </Row>
                    <ListaOpciones />
                    <Boton title={"Generar"}>
                    </Boton>
                </Form>
            </Container>
        </Container>
    );
};
