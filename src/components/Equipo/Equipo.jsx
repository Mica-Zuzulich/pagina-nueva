import EquipoCard from './EquipoCard'
import styles from './Equipo.module.css'
// Las importaciones de imágenes siguen comentadas, ¡bien!

export default function Equipo() {
  // Define variables como null para evitar warnings de React en el src={""}
  const angelaPlaceholder = null; 
  const adrianPlaceholder = null;
  const karolPlaceholder = null;

  return (
    <section className={styles.equipo}>
      <h2>Nuestro Equipo de Trabajo</h2>
      <div className={styles.grid}>
        {/* Usamos null en la prop img */}
        <EquipoCard nombre="Angela Rizzi" cargo="Broker Associate" img={angelaPlaceholder}/>
        <EquipoCard nombre="Adrián López" cargo="Vendedor / Asesor" img={adrianPlaceholder} />
        <EquipoCard nombre="Karol Diaz" cargo="Atención al cliente" img={karolPlaceholder} />
      </div>
    </section>
  )
}