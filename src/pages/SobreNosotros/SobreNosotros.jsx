import styles from './SobreNosotros.module.css'

export default function SobreNosotros() {
  return (
    <section className={styles.sobre}>
      <h1>Nuestra Visión y Misión</h1>

      <div className={styles.textos}>
        <div>
          <h2>Visión</h2>
          <p>Ser líderes indiscutibles en el mercado inmobiliario, ofreciendo soluciones personalizadas que superen las expectativas de nuestros clientes a nivel internacional.</p>
        </div>
        <div>
          <h2>Misión</h2>
          <p>Ayudar a las personas a encontrar el hogar perfecto o realizar inversiones inmobiliarias sólidas, guiados por experiencia, integridad y pasión por el servicio.</p>
        </div>
      </div>

      <h2>Certificaciones</h2>
      <ul className={styles.certificaciones}>
        <li>TRC Certified</li>
        <li>REO Certified</li>
        <li>Member of National Association of Realtors</li>
        <li>MasterMind World - Tony Robbins</li>
      </ul>
    </section>
  )
}
