import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Formulario } from './components/Formulario'
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Formulario />
    </>

  )
}
