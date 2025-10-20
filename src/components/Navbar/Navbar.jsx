import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
// import logo from '../../assets/logo.png' // <-- Línea de importación del logo comentada

export default function Navbar() {
  return (
    <header className={styles.header}>
      {/* <img src={logo} alt="Rizzi Group" className={styles.logo} /> */}
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/proyectos" className={styles.link}>Proyectos</Link>
        <Link to="/sobre-nosotros" className={styles.link}>Sobre Nosotros</Link>
        <Link to="/contacto" className={styles.link}>Contacto</Link>
      </nav>
    </header>
  )
}