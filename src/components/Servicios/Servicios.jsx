import styles from './Servicios.module.css'
// import imgIntl from '../../assets/internacional.png'
// import imgMiami from '../../assets/miami.png'
// import imgInversion from '../../assets/inversion.png'
// import imgOtra from '../../assets/hopetca.png'

export default function Servicios() {
  return (
    <section className={styles.servicios}>
      <h2>Nuestros Servicios</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          {/* <img src={imgOtra} alt="Hipoteca" className={styles.cardImg} /> */}
          <h3>Hipoteca</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
        </div>

        <div className={styles.card}>
          {/* <img src={imgIntl} alt="Propiedades Internacionales" className={styles.cardImg} /> */}
          <h3>Propiedades Internacionales</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
        </div>

        <div className={styles.card}>
          {/* <img src={imgMiami} alt="Propiedades en Miami" className={styles.cardImg} /> */}
          <h3>Propiedades en Miami</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
        </div>

        <div className={styles.card}>
          {/* <img src={imgInversion} alt="Inversión Inmobiliaria" className={styles.cardImg} /> */}
          <h3>Inversión Inmobiliaria</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
        </div>
      </div>
    </section>
  )
}
