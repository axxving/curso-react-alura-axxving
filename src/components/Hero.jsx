import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { LightningFill, Whatsapp } from 'react-bootstrap-icons';

export const Hero = () => {
    return (
        <Container fluid className='hero'>
            <Container>
                <div className="hero-content">
                    <h1 className="display-4">Bienvenido a ScriptHive</h1>
                    <p>Desarrolladores Web</p>
                    <p>Aplicaciones profesionales de alto nivel</p>
                </div>
                <div className="cta-buttons">
                    <Button variant="primary" className="mr-2"><LightningFill className="mb-1 mr-2" /> Explorar</Button>
                    <Button variant="success"><Whatsapp className="mb-1 mr-2" /> WhatsApp</Button>
                </div>
            </Container>
        </Container>
    );
};
