import styles from './Equipo.module.css'

export default function EquipoCard({ nombre, cargo, img }) {
  return (
    <div className={styles.card}>
      <img src={img} alt={nombre} className={styles.img} />
      <h3>{nombre}</h3>
      <p>{cargo}</p>
      <button className={styles.btn}>Asesorate vía Zoom</button>
    </div>
  )
}
