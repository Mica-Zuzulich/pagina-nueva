import styles from './ContactoForm.module.css'

export default function ContactoForm() {
  return (
    <form className={styles.form}>
      <label htmlFor="nombre">Nombre:</label>
      <input id="nombre" type="text" placeholder="Tu nombre" />

      <label htmlFor="email">Email:</label>
      <input id="email" type="email" placeholder="Tu correo" />

      <label htmlFor="mensaje">Mensaje:</label>
      <textarea id="mensaje" rows="4" placeholder="Tu mensaje..." />

      <button type="submit">Enviar</button>
    </form>
  )
}
