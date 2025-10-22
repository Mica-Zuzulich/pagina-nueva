import styles from './SobreAngela.module.css'
// import angelaImg from '../../assets/angela.png' // 👈 imagen comentada por ahora

export default function SobreAngela() {
  return (
    <section className={styles.sobreAngela}>
      <div className={styles.contenedor}>
        <div className={styles.imagen}>
          {/* <img src={angelaImg} alt="Angela Rizzi" /> */}
        </div>

        <div className={styles.texto}>
          <h2>Angela Rizzi</h2>
          <p>
            Angela Rizzi combina más de 25 años de experiencia en el sector inmobiliario con una profunda pasión por el arte y el diseño. 
            Su sólida formación en seguros, finanzas y marketing le permite gestionar transacciones complejas con precisión y una visión estratégica única. 
            Reconocida por su trato personalizado y compromiso con la satisfacción del cliente, Angela acompaña a cada persona en la búsqueda de un hogar que refleje su estilo y aspiraciones. 
            Su enfoque artístico y su alcance internacional, que incluye mercados como Colombia, Italia, Panamá y Portugal, hacen de cada experiencia inmobiliaria un proceso fluido, enriquecedor y a medida.
          </p>
          <button className={styles.boton}>Conocé al equipo</button>
        </div>
      </div>
    </section>
  )
}
