import styles from './Hero.module.css';
import { useTranslation } from "react-i18next";
// import heroImg from '../../assets/fondo.jpg' // imagen de fondo con el logo debajo del nav

export default function Hero() {
  const { t } = useTranslation(); // Hook de i18n

  return (
    <section className={styles.hero}>
      {/* <img src={heroImg} alt="Vista interior con playa de fondo" className={styles.heroImg} /> */}
      <div className={styles.texto}>
        <h1>{t("grupo_inmobiliario")}</h1> {/* Texto traducible */}
      </div>
    </section>
  )
}
