import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Formulario } from './components/Formulario';

import { BotonMas } from './components/MiScriptHive/BotonMas';

export const App = () => {

  const [mostrarFormulario, setMostrarFormulario] = useState(true);

  const cambiarMostrar = () => {
    setMostrarFormulario(!mostrarFormulario);
  }

  return (
    <>
      <Header />
      <Hero />
      {/* motrarFormulario === true ?  <Formulario /> : <></> */}
      { mostrarFormulario && <Formulario /> }
      <BotonMas cambiarMostrar = {cambiarMostrar} />
    </>
  )
}