import styles from './PorqueElegirnos.module.css'
// import imgPorque from '../../assets/porque.png' // Imagen comentada por ahora

export default function PorqueElegirnos() {
  return (
    <section className={styles.porque}>
      <div className={styles.contenedor}>
        <div className={styles.imagen}>
          {/* <img src={imgPorque} alt="Por qué elegirnos" /> */}
        </div>

        <div className={styles.texto}>
          <h2>¿Por qué <span>elegirnos?</span></h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, 
            consectetuer adipiscing elit, sed diam nonummy.
          </p>
        </div>
      </div>
    </section>
  )
}
