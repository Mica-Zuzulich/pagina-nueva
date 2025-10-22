import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa'
// import logo from '../../assets/logo.png' // logo que vamos a poner

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        {/* <div className={styles.logo}>
          <img src={logo} alt="Rizzi Group" className={styles.logoImg} />
        </div> */}

        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/proyectos" className={styles.link}>Proyectos</Link>
          <Link to="/sobre-nosotros" className={styles.link}>Sobre Nosotros</Link>
          <Link to="/contacto" className={styles.link}>Contacto</Link>
        </nav>

        <div className={styles.socials}>
          <a href="#" target="_blank"><FaFacebookF className={styles.icon} /></a>
          <a href="#" target="_blank"><FaInstagram className={styles.icon} /></a>
          <a href="#" target="_blank"><FaYoutube className={styles.icon} /></a>
        </div>
      </div>
    </header>
  )
}
