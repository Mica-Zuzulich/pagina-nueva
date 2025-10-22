import styles from './Hero.module.css'
// import heroImg from '../../assets/fondo.jpg' // imagen de fondo con el logo debajo del nav

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* <img src={heroImg} alt="Vista interior con playa de fondo" className={styles.heroImg} /> */}
      <div className={styles.texto}>
        <h1>Grupo inmobiliario inspirado y comprometido</h1>
      </div>
    </section>
  )
}