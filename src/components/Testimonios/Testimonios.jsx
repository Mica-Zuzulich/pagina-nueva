import styles from './Testimonios.module.css'
import { useState } from 'react'

export default function Testimonios() {
  const [index, setIndex] = useState(0)

  const testimonios = [
    {
      texto: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit...",
      autor: "Darlin Bought - Miami, FL"
    },
    {
      texto: "Excelente experiencia con el equipo de Rizzi Group...",
      autor: "María Pérez - Buenos Aires, AR"
    }
  ]

  const siguiente = () => {
    setIndex((prev) => (prev + 1) % testimonios.length)
  }

  const anterior = () => {
    setIndex((prev) => (prev - 1 + testimonios.length) % testimonios.length)
  }

  return (
    <section className={styles.testimoniosSection}>
      <h2>Testimonios</h2>

      <div className={styles.testimonioCard}>
        <button onClick={anterior} className={styles.flecha}>‹</button>

        <div className={styles.testimonioContenido}>
          <p>{testimonios[index].texto}</p>
          <h4>{testimonios[index].autor}</h4>
        </div>

        <button onClick={siguiente} className={styles.flecha}>›</button>
      </div>
    </section>
  )
}
