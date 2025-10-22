import Hero from '../../components/Hero/Hero';
import Intro from '../../components/Intro/Intro';
import Servicios from '../../components/Servicios/Servicios';
import Inversiones from '../../components/Inversiones/Inversiones';
import PorqueElegirnos from '../../components/Equipo/PorqueElegirnos';
import SobreAngela from '../../components/Equipo/SobreAngela';
import ContactoForm from '../../components/ContactoForm/ContactoForm';
export default function Home() {
  return (
    <>
      <Hero />       {/* Banner principal */}
      <Intro />      {/* Introducción con botón */}

      <Servicios />  {/* las 4 tarjetas */}

      <Inversiones /> {/* Sección de inversiones debajo de servicios */}
      <PorqueElegirnos />
      <SobreAngela /> 
    
      <ContactoForm /> {/* Formulario de contacto */}
    </>
  )
}
