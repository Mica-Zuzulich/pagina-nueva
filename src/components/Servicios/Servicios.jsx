import styles from './Servicios.module.css'

export default function Servicios() {
  return (
    <section className={styles.servicios}>
      <h2>Nuestros Servicios</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Propiedades Internacionales</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
        </div>

        <div className={styles.card}>
          <h3>Propiedades en Miami</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
        </div>

        <div className={styles.card}>
          <h3>Inversión Inmobiliaria</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
        </div>
      </div>
    </section>
  )
}
