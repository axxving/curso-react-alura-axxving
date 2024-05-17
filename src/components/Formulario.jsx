import { React, useState } from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import { Campo } from './Campo';
import { ListaOpciones } from './listaOpciones/ListaOpciones';
import { Boton } from './listaOpciones/Boton';

export const Formulario = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const manejarEnvio = (e) => {
        console.log('Manejar el envio');
        // Evitando el envio del formulario
        e.preventDefault();
        let datosAenviar = {
            nombre,
            apellido,
            puesto,
            foto,
            equipo,
        }

        console.log(datosAenviar);
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
                            valor={nombre}
                            setValor={setNombre}
                        />
                        <Campo
                            titulo="Apellido"
                            controlId="formSubject"
                            type="text"
                            placeholder="Apellido"
                            required
                            valor={apellido}
                            setValor={setApellido}
                        />
                    </Row>
                    <Row>
                        <Campo
                            titulo="Puesto"
                            controlId="formPhone"
                            type="tel"
                            placeholder="Puesto"
                            required
                            valor={puesto}
                            setValor={setPuesto}
                        />
                        <Campo
                            titulo="Foto"
                            controlId="formSubject"
                            type="text"
                            placeholder="Foto"
                            required
                            valor={foto}
                            setValor={setFoto}
                        />
                    </Row>
                    <ListaOpciones 
                        valor={equipo}
                        setEquipo={setEquipo}
                    />
                    <Boton
                        title={"Generar"}>
                    </Boton>
                </Form>
            </Container>
        </Container>
    );
};
