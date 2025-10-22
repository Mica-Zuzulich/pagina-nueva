import styles from './Inversiones.module.css'

export default function Inversiones() {
  return (
    <section className={styles.inversiones}>
      <div className={styles.contenedor}>
        <div className={styles.texto}>
          <h2>Inversiones a nivel <span>Internacional</span></h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam 
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat 
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exercitation 
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse 
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero 
            eros et accumsan.
          </p>
           <button className={styles.boton}>
                    <a href="contacto" style={{ color: 'inherit', textDecoration: 'none' }}>Contáctanos</a>
                  </button>
        </div>
        <div className={styles.imagen}>
          {/* <img src={imgInversiones} alt="Inversiones" /> */}
        </div>
      </div>
    </section>
  )
}
