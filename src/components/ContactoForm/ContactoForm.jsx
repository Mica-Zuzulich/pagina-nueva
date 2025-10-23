import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./ContactoForm.module.css";

export default function ContactoForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [estado, setEstado] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      setEstado("⚠️ Por favor, verifica que no sos un robot.");
      return;
    }

    setEnviando(true);
    setEstado("");

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, mensaje, captchaToken }),
      });

      const data = await res.json();
      if (data.success) {
        setEstado("✅ ¡Mensaje enviado correctamente!");
        setNombre("");
        setEmail("");
        setMensaje("");
        setCaptchaToken("");
      } else {
        setEstado("❌ Ocurrió un error al enviar el mensaje.");
      }
    } catch (error) {
      console.error("Error:", error);
      setEstado("❌ Error al conectar con el servidor.");
    }

    setEnviando(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
        placeholder="Tu nombre"
      />
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Tu correo"
      />
      <label>Mensaje:</label>
      <textarea
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        required
        placeholder="Tu mensaje..."
      />

      <ReCAPTCHA
        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
        onChange={(token) => setCaptchaToken(token)}
      />

      <button type="submit" disabled={enviando}>
        {enviando ? "Enviando..." : "Enviar"}
      </button>
      {estado && <p>{estado}</p>}
    </form>
  );
}
