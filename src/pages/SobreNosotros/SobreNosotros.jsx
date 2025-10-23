import { useState } from 'react'
import Contacto from '../Contacto/Contacto'
import styles from './SobreNosotros.module.css'
import Testimonios from '../../components/Testimonios/Testimonios'

// import angelaImg from '../../assets/angela.jpg'
// import adrianImg from '../../assets/adrian.jpg'
// import karolImg from '../../assets/karol.jpg'
// import visionImg from '../../assets/fondoVision.jpg'
// import icon1 from '../../assets/icon1.png'
// import icon2 from '../../assets/icon2.png'
// import icon3 from '../../assets/icon3.png'
// import icon4 from '../../assets/icon4.png'
// import icon5 from '../../assets/icon5.png'
// import icon6 from '../../assets/icon6.png'
// import icon7 from '../../assets/icon7.png'

export default function SobreNosotros() {
  // 🧠 Lista de testimonios
  const testimonios = [
    {
      texto:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip hendrerit in vulputate velit esse molestie consequat.',
      autor: 'Darlin Bought - Miami, FL',
    },
    {
      texto:
        'El equipo de Rizzi Group fue increíble. Me acompañaron en cada paso de mi inversión. ¡Altamente recomendados!',
      autor: 'Carlos Pérez - Buenos Aires, Argentina',
    },
    {
      texto:
        'Gracias a Angela y su equipo, encontré la propiedad ideal para mi familia. Profesionalismo y calidez humana.',
      autor: 'Sofía Torres - Orlando, FL',
    },
  ]

  // Estado para manejar el testimonio actual
  const [indice, setIndice] = useState(0)

  const handleNext = () => {
    setIndice((prev) => (prev + 1) % testimonios.length)
  }

  const handlePrev = () => {
    setIndice((prev) => (prev - 1 + testimonios.length) % testimonios.length)
  }

  return (
    <>
      {/* Banner inicial */}
      <section className={styles.bannerSobre}>
        <h1>Nuestro Equipo de trabajo</h1>
        <p>
          Rizzi y su equipo multidisciplinario van desde abogados, contadores y sus asesores todos
          bilingües y desde diferentes puntos adentro y afuera de USA para asegurar que todo
          interesado es atendido de manera personal y por un equipo orientado al buen servicio.
        </p>
      </section>

      {/* Perfil de Angela */}
      <section className={styles.perfilAngela}>
        <div className={styles.container}>
          {/* <img src={angelaImg} alt="Angela Rizzi" className={styles.imagen} /> */}
          <div className={styles.texto}>
            <h2>Angela Rizzi</h2>
            <h3>Nuestra Líder</h3>
            <p>
              Angela Rizzi es una broker asociada con más de 24 años de experiencia asesorando
              inversionistas y dueños de casa a alcanzar su sueño. Rizzi trabajó como asesor
              financiero en New York Life Insurance Company, además de gestionar sus propias
              galerías de arte y sus inversiones en real estate.
            </p>
            <p>
              Es una súperhost de Airbnb y con su equipo seleccionan proyectos estudiados y
              analizados en donde ganen todos escogiendo así flexibilidad, retorno, comodidad e
              inversiones fáciles y seguras así como este resort en Orlando que permite a todos
              tener un título de propiedad.
            </p>
            <button className={styles.botonZoom}>Asesoráte con ella vía Zoom</button>
          </div>
        </div>
      </section>

      {/* Perfil de Adrian */}
      <section className={styles.perfilAngela}>
        <div className={styles.container}>
          {/* <img src={adrianImg} alt="Adrian López" className={styles.imagen} /> */}
          <div className={styles.texto}>
            <h2>Adrian López</h2>
            <h3>Vendedor/Asesor</h3>
            <p>
              Adrián López, desde Argentina, aporta al equipo su experiencia en ventas y
              asesoramiento en desarrollo de ideas. Con años de experiencia en diversos sectores,
              hoy se suma a Rizzi Group para ser ese enlace local en Argentina, entendiendo como
              pocos las dificultades de la inversión en el extranjero y la necesidad de proteger el
              ahorro en una economía siempre cambiante.
            </p>
            <button className={styles.botonZoom}>Asesoráte con él vía Zoom</button>
          </div>
        </div>
      </section>

      {/* Perfil de Karol */}
      <section className={styles.perfilAngela}>
        <div className={styles.container}>
          {/* <img src={karolImg} alt="Karol Diaz" className={styles.imagen} /> */}
          <div className={styles.texto}>
            <h2>Karol Diaz</h2>
            <h3>Atención al cliente</h3>
            <p>
              Desde Austin Texas, Karol se suma al equipo de Rizzi como vendedora, emprendedora y
              experta en atención al cliente, con amplia experiencia en el campo.
            </p>
            <button className={styles.botonZoom}>Asesoráte con ella vía Zoom</button>
          </div>
        </div>
      </section>

      {/* Visión y Misión */}
      <section className={styles.visionMisionUnica}>
        <div className={styles.overlay}>
          <div className={styles.textos}>
            <div className={styles.textoBloque}>
              <h2>Nuestra Visión</h2>
              <p>
                En Rizzi Group, nos consideramos líderes indiscutibles en el mercado inmobiliario,
                con más de 25 años de experiencia y dedicación inquebrantables. Nuestra visión es
                impactar positivamente la vida de nuestros clientes, ofreciendo soluciones a medida
                y un servicio excepcional que trasciende las expectativas convencionales.
              </p>
            </div>

            <div className={styles.textoBloque}>
              <h2>Nuestra Misión</h2>
              <p>
                Nuestra misión es simple pero contundente: ayudar a las personas a encontrar el hogar
                perfecto y realizar inversiones inmobiliarias sólidas, guiados por nuestra
                experiencia, integridad y pasión por el servicio al cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section className={styles.certificacionesSection}>
        <div className={styles.container}>
          <div className={styles.textoCertificaciones}>
            <h2>Certificaciones</h2>
            <ul>
              <li>Especialista global en bienes raíces.</li>
              <li>Asesora de estrategia de precios.</li>
              <li>Especialista en ventas cortas.</li>
              <li>Certificación comercial y de inversión.</li>
              <li>Miembro activo de la Academia de Inversionistas de Raúl Luna.</li>
              <li>
                Especialista en alquileres a corto plazo Airbnb y Vrbo en Key Biscayne y Colombia.
              </li>
              <li>MasterMind World Tony Robbins.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Premios y Honores */}
      <section className={styles.premiosHonoresSection}>
        <div className={styles.container}>
          <h2>Premios y Honores</h2>
          <div className={styles.logosGrid}>
            <div className={styles.logoItem}>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet.
              </p>
            </div>
            <div className={styles.logoItem}>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
            <div className={styles.logoItem}>
              <p>Lorem ipsum dolor sit ame.</p>
            </div>
          </div>
        </div>
      </section>

     <Testimonios />

      {/* Contacto al final */}
      <Contacto />

    </>
  )
}
