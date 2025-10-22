import styles from './Proyectos.module.css';
// import fondoImg from '../../assets/fondo-proyectos.jpg'; // imagen

export default function ProyectosIntro() {
  return (
    <section 
      className={styles.intro} 
      // style={{ backgroundImage: `url(${fondoImg})` }}
    >
      <h1>Comenzá una experiencia internacional</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
      </p>
    </section>
  );
}
