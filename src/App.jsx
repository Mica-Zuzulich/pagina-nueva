import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { AppRouter } from './router/AppRouter';
import './i18n'; // o './i18n' si movés el archivo
import LanguageButton from './components/LanguageButton'; // Botón para cambiar idioma

export default function App() {
  return (
    <>
      <Navbar />

      {/* Botón de idioma */}
      <LanguageButton />

      <AppRouter />
      <Footer />
    </>
  );
}
