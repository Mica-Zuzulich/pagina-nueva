import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h1>Grupo inmobiliario inspirado y comprometido</h1>
        <p>Más de 25 años de experiencia brindando soluciones inmobiliarias internacionales.</p>
        <button className={styles.btn}>Conocé más</button>
      </div>
    </section>
  )
}
