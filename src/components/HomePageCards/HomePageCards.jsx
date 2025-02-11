import { Link } from "react-router";
import styles from "./HomePageCards.module.css"

function HomePageCards({ name }) {
  return (
    <Link to={`shop/:${name}`}>
      <div className={styles["homepage-individual-card"]}>
        <h1>{name}</h1>
      </div>
    </Link>
  );
}

export default HomePageCards;
