import ContactoForm from '../../components/ContactoForm/ContactoForm'
import styles from './Contacto.module.css'

export default function Contacto() {
  return (
    <>
      <section className={styles.contacto}>
        <h1>Contactános</h1>
        <p>Te asesoramos en cada paso del proceso para que tu inversión sea segura y personalizada.</p>

        <div className={styles.formContainer}>
          <ContactoForm />

          <div className={styles.info}>
            <h2>Angela Rizzi</h2>
            <p>Broker Associate | GRI, CRS, TRC, REO Certified</p>
            <p>101 Crandon Blvd. Suite 276 Key Biscayne FL 33149</p>
            <p>📞 +1 786-853-9853</p>
            <p>✉️ angela@rizziinvestments.com</p>
          </div>
        </div>
      </section>
    </>
  )
}
