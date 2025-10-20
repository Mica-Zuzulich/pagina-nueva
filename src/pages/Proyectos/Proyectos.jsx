import styles from './Proyectos.module.css'

export default function Proyectos() {
  return (
    <section className={styles.proyectos}>
      <h1>Proyectos Internacionales</h1>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Lisboa, Portugal</h3>
          <p>Una ciudad de oportunidades, estilo y cultura. Invertí en uno de los destinos más atractivos de Europa.</p>
          <button>Saber más</button>
        </div>

        <div className={styles.card}>
          <h3>Ciudad de Panamá</h3>
          <p>Inversiones seguras y rentables en un mercado en crecimiento, con beneficios fiscales para extranjeros.</p>
          <button>Saber más</button>
        </div>

        <div className={styles.card}>
          <h3>Orlando, Miami</h3>
          <p>Disfrutá de proyectos únicos con título de propiedad, retorno garantizado y una ubicación soñada.</p>
          <button>Saber más</button>
        </div>
      </div>
    </section>
  )
}
