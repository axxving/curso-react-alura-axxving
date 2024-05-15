import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Formulario } from './components/Formulario';

import { BotonMas } from './components/MiScriptHive/BotonMas';

//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';

export const App = () => {

  const [mostrarFormulario, setMostrarFormulario] = useState(true);

  // Ternario -- condicion ?  si es verdadero : si es falso

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