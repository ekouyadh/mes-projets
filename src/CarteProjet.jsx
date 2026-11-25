
import styles from "./CarteProjet.module.css";

function CarteProjet(props) {
  return (
    <article className={styles.carte}>
      <h2 className={styles.titre}>{props.titre}</h2>

      <p>Technologies : {props.technologies}</p>

      <p>{props.description}</p>
    </article>
  );
}

export default CarteProjet;
