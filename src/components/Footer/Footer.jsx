import React from "react";
import styles from "./Footer.module.css";
// import logo from "../../assets/logo.png"; // logo

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Un miembro de:</p>
      {/* <img src={logo} alt="Logo" className={styles.logo} /> */}
    </footer>
  );
}
